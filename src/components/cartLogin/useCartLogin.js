
import { useApi } from '@components/hooks/useApi';
import * as Yup from 'yup';
export const useCartLogin = ({ setLogin }) => {
  const { api } = useApi()

  const validationSchema = Yup.object().shape({
    email_address: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('password is required')
  });

  const initialValues = {
    email_address: '',
    password: '',
  };

  const handleSubmitFrom = (values, errors) => {
    // Handle form submission here
    const formData = new FormData();
    formData.append("emailNumber", values.email_address);
    formData.append("password", values.password);
    api
      .post("/sing-in", formData)
      .then(function (response) {
        if (response?.data?.error) {
        }
        else {
          localStorage.setItem("token", response?.data?.token);
          localStorage.setItem("user_identity", response?.data?.user_id);
          setLogin(false)
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  };
  return {
    validationSchema,
    initialValues,
    handleSubmitFrom
  }
}
