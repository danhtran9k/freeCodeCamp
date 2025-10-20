import math
from functools import lru_cache
from typing import List

MOD = 10 ** 9 + 7

class Solution:
    def magicalSum(self, M: int, K: int, nums: List[int]) -> int:

        @lru_cache(None)
        def dfs(k_left, mask, pos_left, ix):
            bit_count = mask.bit_count()
            if pos_left == 0 and bit_count == k_left: return 1
            if pos_left <= 0 or ix == len(nums) or pos_left + bit_count < k_left: return 0

            total = 0
            # freq 0 = skip, mask + 0 = mask, mul(0) = 1 !!

            for freq in range(pos_left + 1):
                n_mask = mask + freq
                nk_left = k_left - (n_mask & 1)

                mul = math.comb(pos_left, freq) * pow(nums[ix], freq, MOD) % MOD

                dfs_freq = (dfs(nk_left, n_mask >> 1, pos_left - freq, ix + 1)) % MOD
                total += (mul * dfs_freq) % MOD

                # total += (
                #     pow(nums[ix], freq, MOD) * next  # curr element * next element
                #     * comb(pos_left, freq)  # add combinations of freq in m
                # ) % MOD

            return total

        return (dfs(K, 0, M, 0)) % MOD
