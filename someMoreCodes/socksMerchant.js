//Question Link: https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function sockMerchant(n, arr) {
let totalPair = 0;

const socksColor = {};

for(let i=0;i<n;i++){
    socksColor[arr[i]] = (socksColor[arr[i]] || 0) + 1;
}

Object.keys(socksColor).forEach(socks => (
    totalPair += Math.floor(socksColor[socks] / 2)
));

return totalPair;

}