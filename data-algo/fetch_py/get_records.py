import asyncio
import os
from dotenv import load_dotenv
import aiohttp
from utils_py.fetch_ql import lc_get_ql
from utils_py.lc_query import (
    DAILY_PARAMS,
    DAILY_HEADINGS,
    LC_COM,
    daily_get_url
)
from utils_py.csv_analyze import save_file, sleep_async

load_dotenv()


async def get_leet_daily():
    """Fetch LeetCode daily and weekly challenges"""
    daily = [DAILY_HEADINGS]
    weekly = [DAILY_HEADINGS]
    
    start_year = DAILY_PARAMS['START_YEAR']
    start_month = DAILY_PARAMS['START_MONTH']
    end_year = DAILY_PARAMS['END_YEAR']
    end_month = DAILY_PARAMS['END_MONTH']
    
    # first daily: 2020-04 (first weekly: 2020-08)
    for year in range(start_year, end_year + 1):
        for month in range(1, 13):
            if (year == start_year and month < start_month) or \
               (year == end_year and month > end_month):
                continue
            
            print(f'fetching: {year}-{month}')
            
            url = daily_get_url(year, month)
            payload = await lc_get_ql(url)
            res = payload.get('dailyCodingChallengeV2')
            
            append_to_arr(res['challenges'], daily)
            append_to_arr(res['weeklyChallenges'], weekly)
            
            await sleep_async(2000)  # to prevent rate limiting
    
    save_file(daily, 'daily')
    save_file(weekly, 'weekly')
    
    print('finished writing')


def append_to_arr(response, arr):
    """Append response data to array in CSV format"""
    for daily in response:
        row = []
        for head_key in DAILY_HEADINGS:
            daily_info = daily.get(head_key)
            
            if daily_info is not None:
                if head_key == 'link':
                    daily_info = LC_COM + daily_info
                
                row.append(daily_info)
                continue
            
            detail_info = daily['question']
            value = detail_info.get(head_key)  # override if special Keys
            
            if head_key == 'status':
                value = 'X' if value == 'ac' else ''
            if head_key == 'isPaidOnly':
                value = '!!!' if value else ''
            if head_key == 'topicTags':
                value = ', '.join([el['slug'] for el in detail_info[head_key]])
            
            row.append(value)
        
        arr.append(row)


if __name__ == '__main__':
    asyncio.run(get_leet_daily())

