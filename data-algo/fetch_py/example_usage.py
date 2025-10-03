#!/usr/bin/env python3
"""
Example usage of get_records.py

Chạy script này để fetch LeetCode daily/weekly challenges
"""

import asyncio
from get_records import get_leet_daily


async def main():
    """Main function to run the fetcher"""
    print("Starting LeetCode data fetch...")
    print("=" * 50)
    
    await get_leet_daily()
    
    print("=" * 50)
    print("Done! Check daily.csv and weekly.csv for results.")


if __name__ == '__main__':
    # Chạy async function
    asyncio.run(main())

