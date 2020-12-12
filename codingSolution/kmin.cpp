#include<bits/stdc++.h>
using namespace std;

int main(){
	int t;
	cin>>t;
	
	while(t--){
		int n, i;
		cin>>n;
		
		int arr[n];
        for(i=0;i<n;i++){
			cin>>arr[i];		
		}
        
        int k;
        cin>>k;
		priority_queue<int, vector<int>, greater<int> > pq;

		for(i=0;i<n;i++){
			pq.push(arr[i]);	
		}
		int ans;
        i=1;
		while(!pq.empty()){
			if(i==k){
				ans = pq.top();
				break;
			}
			i++;
			pq.pop();
		}
		cout<<ans<<endl;
	}
	return 0;
}
