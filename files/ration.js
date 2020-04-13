let calculate = document.getElementById("calc");
let output = document.getElementById("output");
let success = document.getElementById("success");
let results = document.getElementById("results");

calculate.addEventListener('click', () => {
  let members = document.getElementById("members").value;
  let duration = document.getElementById("duration").value;
  let cereal = document.getElementById("cereal").value;
  let rice = document.getElementById("rice").value;
  let pulses = document.getElementById("pulses").value;

  let temp_cereal = .166*members*duration;
  let temp_rice = .083*members*duration;
  let temp_pulses = .041*members*duration;

  let time_cereal= cereal/(.166*members);
    let time_rice= rice/(.083*members);
    let time_pulses= pulses/(.041*members);

  if((cereal >= temp_cereal && rice >= temp_rice) && pulses >= temp_pulses)
  {
    let time = time_cereal/3 + time_rice/3 +time_pulses/3;
    let time_total = Math.round(time);
    results.style.opacity = "1";
    results.style.height = "100vh";
    success.innerHTML = "YOUR GROCIES WILL LAST";
    output.innerHTML = ` <span style = "color:white;font-size:6rem;"> ${time_total} </span> DAYS`;
  }
  else if(cereal < temp_cereal && (rice >= temp_rice && pulses >= temp_pulses)){
    let c = temp_cereal - cereal;
    let ct = Math.round(c);
    results.style.opacity = "1";
    results.style.height = "100vh";
    success.innerHTML = "YOU NEED AN ADDITIONAL";
    output.innerHTML = ` <span style = "color:white;font-size:6rem;">${ct}kg</span> CEREAL`;
  }
  else if(rice < temp_rice && (cereal >= temp_cereal && pulses >= temp_pulses)){
    let c = temp_rice - rice;
    let ct = Math.round(c);
    results.style.opacity = "1";
    results.style.height = "100vh";
    success.innerHTML = "YOU NEED AN ADDITIONAL";
    output.innerHTML = ` <span style = "color:white;font-size:6rem;">${ct}kg</span> RICE`;
  }
  else if(pulses < temp_pulses && (rice >= temp_rice && cereal >= temp_cereal)){
    let c = temp_pulses - pulses;
    let ct = Math.round(c);
    results.style.opacity = "1";
    results.style.height = "100vh";
    success.innerHTML = "YOU NEED AN ADDITIONAL";
    output.innerHTML = ` <span style = "color:white;font-size:6rem;">${ct}kg</span> PULSES`;
  }
  else if((rice < temp_rice && pulses < temp_pulses) && cereal>=temp_cereal)
  {
    let c1 = temp_rice - rice;
    let c2 = temp_pulses - pulses;
    let c1t = Math.round(c1);
    let c2t = Math.round(c2);
    results.style.opacity = "1";
    results.style.height = "100vh";
    success.innerHTML = "YOU NEED AN ADDITIONAL";
    output.innerHTML = ` <span style = "color:white;font-size:6rem;">${c1t}kg</span> RICE<br> and <span style = "color:white;font-size:6rem;">${c2t}kg</span> PULSES`;
  }
  else if((rice < temp_rice && cereal < temp_cereal) && pulses>=temp_pulses)
  {
    let c1 = temp_rice - rice;
    let c2 = temp_cereal - cereal;
    let c1t = Math.round(c1);
    let c2t = Math.round(c2);
    results.style.opacity = "1";
    results.style.height = "100vh";
    success.innerHTML = "YOU NEED AN ADDITIONAL";
    output.innerHTML = ` <span style = "color:white;font-size:6rem;">${c1t}kg</span> RICE<br> and <span style = "color:white;font-size:6rem;">${c2t}kg</span> CEREAL`;
  }
  else if((pulses < temp_pulses && cereal < temp_cereal) && rice>=temp_rice)
  {
    let c1 = temp_pulses - pulses;
    let c2 = temp_cereal - cereal;
    let c1t = Math.round(c1);
    let c2t = Math.round(c2);
    results.style.opacity = "1";
    results.style.height = "100vh";
    success.innerHTML = "YOU NEED AN ADDITIONAL";
    output.innerHTML = ` <span style = "color:white;font-size:6rem;">${c1t}kg</span> PULSES<br> and <span style = "color:white;font-size:6rem;">${c2t}kg</span> CEREAL`;
  }
  else{
    let c1 = temp_pulses - pulses;
    let c2 = temp_cereal - cereal;
    let c3 = temp_rice - rice;
    let c1t = Math.round(c1);
    let c2t = Math.round(c2);
    let c3t = Math.round(c3);
    results.style.opacity = "1";
    results.style.height = "100vh";
    success.innerHTML = "YOU NEED AN ADDITIONAL <br>";
    output.innerHTML = ` <span style = "color:white;font-size:6rem;">${c1t}kg</span> PULSES<br> and <span style = "color:white;font-size:6rem;">${c2t}kg</span> CEREAL <br> and <span style = "color:white;font-size:6rem;">${c3t}kg</span> RICE`;
  }
  
});