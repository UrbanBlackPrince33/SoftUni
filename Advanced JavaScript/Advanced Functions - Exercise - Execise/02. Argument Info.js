function solve(){
   let data = {};

   Array.from(arguments).forEach((x)=> {
       let type = typeof x;
       console.log(`${type}: ${x}`);

       if(!data[type]){
           data[type] = 0;
       }
       data[type]++;
   });

   Object.keys(data)
   .sort((a,b) => {
       return data[b] - data[a]
    })
   .forEach((key)=> console.log(`${key} = ${data[key]}`));
}

solve('cat', 42, function () { console.log('Hello world!'); });