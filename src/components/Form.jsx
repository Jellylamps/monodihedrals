import {useState} from "react";

const Form = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a044c59b-8358-4d1a-962a-fc7bf45077a5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <p className="short-input">
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" required/>
        </p>
        <p className="short-input">
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" required/>
        </p>
        <p><textarea name="message" placeholder="description or link" required></textarea></p>

        <button id="submission-button" type="submit">Submit</button>

      </form>
      <span>{result}</span>

    </div>
  );
};

export default Form;