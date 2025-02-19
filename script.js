async function func ( ) {
    const res = await fetch('http://localhost:5000')
    const data = await res.json()
    
    
        
        const p = document.createElement('p')
        p.innerHTML = JSON.stringify(data)
        document.querySelector('.root').appendChild(p)
    
}

console.log("hello world");

async function fun () { 
    const res = await fetch('http://localhost:5000')
    const data = await res.json()
   
    data.forEach((value)=>{ 
        const p = document.createElement('p')
        p.innerHTML = value.name
        document.querySelector('.root').appendChild(p)     
    })
}




//fun()

const add = async ()=>{
    if(document.querySelector('input').value.length){
    const res = await fetch('http://localhost:5000/add', {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name: document.querySelector('input').value})
    })
    const data = await res.json()
    console.log(data);
}else{
    alert("Enter your name")
}
}
