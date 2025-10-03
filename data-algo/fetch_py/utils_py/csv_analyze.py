import csv
import asyncio
import os
from pathlib import Path


def get_relative_path(filename):
    """Get relative path from current file's directory"""
    current_dir = Path(__file__).parent.parent
    return current_dir / filename


def save_file(arr, filename):
    """Save array data to CSV file"""
    file_path = get_relative_path(f'{filename}.csv')
    
    def escape_csv_cell(s):
        """Escape CSV special characters"""
        s_str = str(s) if s is not None else ''
        if ',' in s_str or '"' in s_str:
            return f'"{s_str.replace(chr(34), chr(34)+chr(34))}"'
        return s_str
    
    # row: list
    content = '\n'.join(
        [','.join([escape_csv_cell(cell) for cell in row]) for row in arr]
    )
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)


def read_csv(filename):
    """Read CSV file and return headers and rows"""
    headers = {}
    rows = []
    
    with open(filename, 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        is_header_read = False
        
        for row in reader:
            if not is_header_read:
                for i, col in enumerate(row):
                    headers[col] = i
                is_header_read = True
            else:
                rows.append(row)
    
    return {'rows': rows, 'headers': headers}


# =======================================
# ANALYSIS UTILS
def init_diff():
    """Initialize difficulty counts structure"""
    DIFFS = ['Easy', 'Medium', 'Hard']
    diff_counts = {}
    
    for diff in DIFFS:
        diff_counts[diff] = {
            'count': 0,
            'day': [0] * 7
        }
    return diff_counts


def round_num(num):
    """Round number to 2 decimal places"""
    return f'{float(num):.2f}'


# =======================================
# SMALL UTILS
def compare(a, b):
    """Compare two values"""
    if a > b:
        return 1
    if a < b:
        return -1
    return 0


async def sleep_async(ms):
    """Async sleep in milliseconds"""
    await asyncio.sleep(ms / 1000)

