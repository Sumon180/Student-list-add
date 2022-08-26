

let stName = document.getElementById('name');
let roll = document.getElementById('roll');
let dept = document.getElementById('dept');
let cgpa = document.getElementById('cgpa');
let btn = document.getElementById('btn');

btn.addEventListener('click',(e) => {
    e.preventDefault();

   if(stName.value === ""){
       alert('Please Enter Name');
   }
   else if(roll.value === ""){
        alert('Please Enter ID');
   }
   else if(dept.value === ""){
        alert('Please Enter Depertment');
    }
   else if(cgpa.value === ""){
        alert('Please Enter cgpa');
    }
    else{
        let tbody = document.getElementById('tbody');
        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerHTML = stName.value;
        tr.appendChild(td1);
       

        let td2 = document.createElement('td');
        td2.innerHTML = roll.value;
        tr.appendChild(td2);
        

        let td3 = document.createElement('td');
        td3.innerHTML = dept.value;
        tr.appendChild(td3);
        

        let td4 = document.createElement('td');
        td4.innerHTML = cgpa.value;
        tr.appendChild(td4);
        tbody.appendChild(tr);
    }

});