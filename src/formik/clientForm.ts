import * as Yup from "yup";

export const initialClientValues = {
  name: "",
  points: 0,
  visits: 0,
};

export const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  points: Yup.number().required("Points is required"),
  visits: Yup.number().required("Visits is required"),
});
