import React, { useState } from "react";
import { Modal, Input, Button, Typography, Select, Image } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { Main } from "./InscriptionModal.styled";
const { Text } = Typography;
const { Option } = Select;

interface InscriptionModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (text: string) => void;
}

const InscriptionModal: React.FC<InscriptionModalProps> = ({
  visible,
  onClose,
  onSave,
}) => {
  const [inscription, setInscription] = useState<string>("");
  const [selectedFont, setSelectedFont] = useState<string>("font1");
  const [charactersLeft, setCharactersLeft] = useState<number>(20);

  const handleInscriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInscription(value);
    setCharactersLeft(20 - value.length);
  };

  const handleFontChange = (value: string) => {
    setSelectedFont(value);
  };

  const handleSave = () => {
    onSave(inscription);
  };

  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={null}
      closeIcon={<CloseOutlined />}
      className="inscription-modal"
      width={450}
      style={{ top: "50%", transform: "translateY(-50%)" }}
    >
      <Main>
        <div className="tooltip-content">
          <Text className="main-title">Enter Your Inscription</Text>
          <Input
            className="input-text"
            placeholder="Engrave Text"
            maxLength={20}
            value={inscription}
            onChange={handleInscriptionChange}
          />
          <Text className="char-count">Characters Left: {charactersLeft}</Text>
          <div className="font-selection-container">
            <Text className="font-selection-title">Choose Font</Text>
            <Select
              defaultValue="font1"
              onChange={handleFontChange}
              className="font-select"
            >
              <Option value="font1">
                <Image
                  src="https://ecommo--ion.bluenile.com/static-dyo-bn/font1.b2666.png"
                  alt="Lucida Sans"
                  width={25}
                />
              </Option>
            </Select>
          </div>
          <div className="preview-container">
            <Text className="preview-title">Inscription Preview</Text>
            <div className="inscription-preview">
              <svg viewBox="0 0 248 120">
                <path
                  d="M0,80 Q124,25 248,80"
                  fill="transparent"
                  id="inscription-path"
                ></path>
                <text textAnchor="middle">
                  <textPath href="#inscription-path" startOffset="50%">
                    <tspan className={selectedFont}>{inscription}</tspan>
                  </textPath>
                </text>
              </svg>
            </div>
            <Text className="preview-explanation">
              A 10x magnifying glass may be required to clearly read the
              inscription on your jewelry
            </Text>
          </div>
          <div className="save-container">
            <Button onClick={handleSave} className="save-button">
              SAVE INSCRIPTION
            </Button>
          </div>
        </div>
      </Main>
    </Modal>
  );
};

export default InscriptionModal;
