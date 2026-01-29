import { useState } from 'react';
import axios from 'axios';
const API_BASE = import.meta.env.VITE_API_BASE;
const API_PATH = import.meta.env.VITE_API_PATH;
export default function Login({ getData, setIsAuth }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  //處理表單填值
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    //處理提交表單
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE}/admin/signin`, formData);
      console.log(response.data);
      const { token, expired } = response.data;
      //儲存token到cookie
      document.cookie = `myToken=${token};expires=${new Date(expired)}`;
      //設定axios的預設headers
      axios.defaults.headers.common.Authorization = `${token}`;
      //載入產品資料
      getData();
      //更新登入狀態為true
      setIsAuth(true);
    } catch (error) {
      console.log('提交表單出錯了,error為', error);
    }
  };
  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="w-100" style={{ maxWidth: '500px' }}>
        <form action="" onSubmit={handleSubmit}>
          <h1>請先登入</h1>
          <div className="form-floating mb-3 ">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="btn btn-primary" type="submit">
            登入
          </button>
        </form>
      </div>
    </div>
  );
}
