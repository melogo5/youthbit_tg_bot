import React from "react";
import { Input } from "antd";

import { Controller } from "effector-react-form";

type InputProps = {
    controller: Controller;
    label: React.ReactNode;
  };

export const InputField: React.FC<InputProps> = ({ controller, label }) => {
    const { input } = controller();
  
    return (
      <div className="input-wrap">
        <label>
          <span>{label}</span>
          <Input {...input} value={input.value || ''} className="input" />
        </label>
      </div>
    );
  };