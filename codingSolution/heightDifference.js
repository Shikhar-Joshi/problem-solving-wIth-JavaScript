function getMinDiff(arr, n, k)
    {
        arr.sort((a, b) => a-b);
        let min_elem, max_elem;
        let ans = arr[n-1] - arr[0];
        
        for (let i=1 ; i<n; i++){
            if (arr[i] >= k)
            {
                max_elem = Math.max(arr[i-1] + k, arr[n-1] - k );
                min_elem = Math.min(arr[0] + k, arr[i] - k );
                ans = Math.min(ans, max_elem - min_elem);
            }
        }
        return ans;
    }

const arr = [7,12,3];
let [k, n] = [8, 3];
console.log(getMinDiff(arr, n, k));