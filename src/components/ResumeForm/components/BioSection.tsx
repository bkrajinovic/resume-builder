import { useState } from "react";

interface IFormValues {
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  city: string;
  address: string;
  [key: string]: string;
}

interface IFormInputs {
  label: string;
  name: string;
  type: string;
}

const BioSection = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<IFormValues>({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    city: "",
    address: "",
  });

  const handleExpandButton = () => {
    setIsExpanded(!isExpanded);
  };

  const handleChangeFormValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formInputs: IFormInputs[] = [
    { label: "Name", name: "name", type: "text" },
    { label: "Last name", name: "lastName", type: "text" },
    { label: "Email", name: "email", type: "text" },
    { label: "Phone number", name: "phoneNumber", type: "text" },
    { label: "City", name: "city", type: "text" },
    { label: "Address", name: "address", type: "text" },
  ];

  return (
    <div className="bio">
      <div className="bio__header">
        <h1>Bio</h1>
        <span onClick={handleExpandButton}>{isExpanded ? "-" : "+"}</span>
      </div>

      <div className="bio__form">
        {isExpanded &&
          formInputs.map((input: IFormInputs) => (
            <div className="bio__form__input" key={input.name}>
              <label htmlFor={input.name}>{input.label}</label>
              <input
                type={input.type}
                name={input.name}
                value={formValues[input?.name]}
                onChange={handleChangeFormValues}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default BioSection;
