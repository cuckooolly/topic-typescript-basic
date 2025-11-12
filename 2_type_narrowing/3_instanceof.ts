import axios, { AxiosError } from "axios";

async function fetchData(url: string) {
  try {
    const response = await axios.get(url);
    console.log("Data:", response.data);
    // AxiosError가 아닌 다른 에러 발생
    // throw new Error("This is a general error");
  } catch (error) {
    if (error instanceof AxiosError) {
      // AxiosError인 경우
      console.log("Axios error occurred");
    } else {
      // 일반 Error인 경우
      console.log("General error occurred");
    }
  }
}

fetchData("https://jsonplaceholder.typicode.com/posts/1"); // 정상 요청 예시
// fetchData("https://invalid-url"); // 오류 발생 예시
