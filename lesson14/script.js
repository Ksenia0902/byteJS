const formConfig = [
  {
    element: "text",
    name: "login",
    label: "Логин",
  },
  {
    element: "text",
    name: "age",
    label: "Возраст",
  },
  {
    element: "select",
    name: "language",
    label: "Выберите язык программирования",
    options: [
      {
        text: "JavaScript",
        value: "js",
      },
      {
        text: "Java",
        value: "java",
      },
      {
        text: "Python",
        value: "python",
      },
    ],
  },
];


const handleForm = (event) => {
  event.preventDefault()

  const formData = new FormData(event.target)

  console.log(formData)

  const data = {}
  for (let pair of formData.entries()) {
    data[pair[0]] = pair[1]
  }
  
  console.log(data)
  
};

const createInput = (inputData) => {
  const input = document.createElement('input');
  input.setAttribute('type', 'text')
  input.setAttribute('name', inputData.name)
  input.setAttribute('id', inputData.name)

  return input
};

const createSelect = (selectData) => {
  const select = document.createElement('select');

  select.setAttribute('name', selectData.name)
  select.setAttribute('id', selectData.name)

  selectData.options.forEach((option) => {
    const opt = document.createElement('option')

    opt.innerText = option.text;
    opt.setAttribute('value', option.value)

    select.append(opt)
  })

  return select
};

const createForm = (formArrData) => {
  const form = document.createElement('form');
  const btn = document.createElement('button');

  btn.setAttribute('type', 'submit');
  btn.innerText = 'SUBMIT';

   formArrData.forEach((element) => {
     const wrapper = document.createElement('div');
     const label = document.createElement('label');

     label.setAttribute('for', element.label)
     label.innerText = element.label

     if (element.element === 'text') {
       const input = createInput(element);
       wrapper.append(label, input)
     } else if (element.element === 'select') {
       const select = createSelect(element);
       wrapper.append(label, select)
     }

     form.append(wrapper)
   });
  
  form.append(btn)
  document.body.append(form)

  return form
};

let form = createForm(formConfig);
form.addEventListener('submit', handleForm)

