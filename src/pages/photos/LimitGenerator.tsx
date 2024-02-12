import { Button } from "@/components/button/Button";
import Input from "@/components/input/Input";
import { ILimitGenerator } from "@/utils/types/typesPhotos";
import { useState } from "react";
import styled from "styled-components";

const LimitGenLayout = styled.section`
  width: 100%;
  height: 5%;
  display: flex;
  align-items: center;
  padding: 5px 0;
  justify-content: center;
`;

const LimitGenerator = ({ onGenerateLimit }: ILimitGenerator) => {
  const [generatedNo, setGeneratedNo] = useState<string>("");

  return (
    <LimitGenLayout>
      <Input
        type="string"
        placeholder="Enter limit number ..."
        value={generatedNo}
        onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
          setGeneratedNo(e.target.value);
        }}
      />
      <span>&nbsp;</span>
      <Button
        text="Generate"
        onClickHandler={() => onGenerateLimit(generatedNo)}
      />
    </LimitGenLayout>
  );
};

export default LimitGenerator;
LimitGenerator.defaultProps = {
  onGenerateLimit: () => {},
};
