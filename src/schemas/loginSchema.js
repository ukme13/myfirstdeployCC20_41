 import * as Yup from 'yup';
 
 export const loginSchema = Yup.object({
    email: Yup.string()
    .email("รูปแบบอีเมลไม่ถูกต้อง")
    .required("กรุณากรุณากรอกอีเมล"),
    // password: Yup.string().min(6, "รหัสผ่านต้องมีอย่างน้อย 6 ตัว").required("กรุณากรอกรหัสผ่าน")
    password: Yup.string()
    .min(6, ({path, value})=> `${path} ต้องมีอย่างน้อย 6 ตัว ตอนนี้มีแค่ ${value.length}`)
    .required("กรุณากรอกรหัสผ่าน"),
    day: Yup.number()
    .typeError("ต้องเป็นตัวเลข")
    .min(1, "วันต้องอยู่ระหว่าง 1 ถึง 31")
    .max(31,"วันต้องอยู่ระหว่าง 1 ถึง 31" ),
    age: Yup.number()
    .typeError("กรุณากรอกอายุเป็นตัวเลข")
    // .min(11, "ต้องมีอายุมากกว่า 10 ปี")
     .min(11, ({path, value})=> `${path} ต้องมีอายุมากกว่า 10 ปี ตอนนี้คือ ${value}`)
  })