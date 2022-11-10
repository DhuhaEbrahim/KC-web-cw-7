function BMI(weight, height) {
  let result = weight / (height * weight);
  return result;
}
console.log(BMI(60, 1.6));
function Status(BodyMass) {
  if (BodyMass < 18.5) {
    return "you are under weight";
  } else if (BodyMass >= 18.5 && BodyMass <= 25) {
    return "Healthy weight";
  } else {
    return "you are over wieght";
  }
}
function Calculate() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let bmi_value = BMI(weight, height);
  let desc = Status(bmi_value);
  let box = document.getElementById("result");
  box.innerText = bmi_value + " == " + desc;
}
