export const daily_lc = () => {}


const MOD = BigInt(1e9 + 7);

const facts = new Array<bigint>(51);
facts[0] = 1n;
facts[1] = 1n;

const invFacts = new Array<bigint>(51);
invFacts[0] = 1n;
invFacts[1] = 1n;

const setBits = new Int8Array(51);
setBits[1] = 1;

for (let i = 2; i < facts.length; ++i) {
  facts[i] = (facts[i - 1] * BigInt(i)) % MOD;

  // Ferma's Little Theorem.
  invFacts[i] = pow(facts[i], Number(MOD) - 2);

  setBits[i] = countSetBits(i);
}

function pow(x: bigint, n: number): bigint {
  let p = 1n;
  while (n > 0) {
    if (n & 1) p = (p * x) % MOD;
    x = (x * x) % MOD;
    n >>= 1;
  }
  return p;
}

function comb(n: number, k: number): bigint {
  return (((facts[n] * invFacts[k]) % MOD) * invFacts[n - k]) % MOD;
}

function countSetBits(x: number): number {
  let cnt = 0;
  while (x > 0) {
    if (x & 1) ++cnt;
    x >>= 1;
  }
  return cnt;
}

function magicalSum(m: number, k: number, nums: number[]): number {
  const bigNums = nums.map((e) => BigInt(e));
  const memo = new Map<number, bigint>();
  const n = nums.length;

  function dfs(i: number, m: number, k: number, carry: number): bigint {
    if (m < 0 || k < 0) return 0n;
    if (m + setBits[carry] < k || i === n) return 0n;

    if (m === 0) return setBits[carry] === k ? 1n : 0n;

    const key = ((i * 31 + m) * 31 + k) * 51 + carry;
    let ans = memo.get(key);

    if (ans === undefined) {
      ans = 0n;

      for (let take = 0; take <= m; ++take, ++carry) {
        const ways = (comb(m, take) * pow(bigNums[i], take)) % MOD;
        ans += ways * dfs(i + 1, m - take, k - (carry & 1), carry >> 1);
        ans %= MOD;
      }

      memo.set(key, ans);
    }

    return ans;
  }

  return Number(dfs(0, m, k, 0));
}