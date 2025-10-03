import os
import aiohttp
from .lc_query import LC_QL


def get_auth_headers():
    """Get authentication headers for LeetCode API"""
    leetcode_session = os.getenv('LEETCODE_SESSION', '')
    return {
        'Cookie': f'LEETCODE_SESSION={leetcode_session}'
    }


async def lc_post_ql(query, payload):
    """POST request to LeetCode GraphQL API"""
    try:
        headers = {
            'Content-Type': 'application/json',
            **get_auth_headers()
        }
        
        body = {
            'query': query,
            'variables': payload
        }
        
        async with aiohttp.ClientSession() as session:
            async with session.post(LC_QL, headers=headers, json=body) as response:
                json_res = await response.json()
                return json_res.get('data')
    except Exception as err:
        print(f'Fetch error: {err}')
        raise err


async def lc_get_ql(url):
    """GET request to LeetCode GraphQL API"""
    try:
        headers = get_auth_headers()
        
        async with aiohttp.ClientSession() as session:
            async with session.get(url, headers=headers) as response:
                json_res = await response.json()
                return json_res.get('data')
    except Exception as err:
        print(f'Fetch error: {err}')
        raise err

