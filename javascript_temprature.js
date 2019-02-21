//temperature generator
temp=[];
for(let i=0;i<80;i++){
temp[i]=Math.floor(Math.random()*105);
}
//inserts the data into array
function insert(x){
	temp.push(x);
}
//sorting the temperature data in ascending order
function sort(){
	for(var i=0; i<temp.length; i++){
		for(var j=0;j<temp.length-i-1; j++){
			if(temp[j]>temp[j+1]){
				let t=temp[j];
				temp[j]=temp[j+1];
				temp[j+1]=t;
			}
		}
	}
}

//prints the max temperatue in the data
function get_max(){
	var high=temp[temp.length-1];
	console.log('Maxmium temperature '+high);
}
//prints the minimum temperature in data
function get_min(){
	var min=temp[0];
	console.log('Minimium temperature '+min);
}
//prints the mean of the temperature data
function get_mean(){
	sum=0;
	for(let i=0;i<temp.length;i++){
		sum=sum+temp[i];
	}
	var Avg=sum/temp.length;
	console.log('Mean of the temperature '+Avg);
}
//prints the maxmium temperature of the data (mode)
m_obj={};
function get_mode(){
	var mode;
	var k;
	for(var a=0; a<temp.length;a++){
		if(m_obj[temp[a]]===undefined)
			m_obj[temp[a]]=0;
		m_obj[temp[a]]=m_obj[temp[a]]+1;
	}
	var max_freq=0;
	for(k in m_obj){
		if(m_obj[k]>max_freq){
			max_freq=m_obj[k];
			mode=k;
		}
	}
	console.log('Mode of the temperature '+mode);
}
insert(120);
console.log(temp);//temp array before sorting
sort();
console.log(temp);//temp array after sorting
get_max();
get_min();
get_mean();
get_mode();