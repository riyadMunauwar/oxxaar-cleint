import { useState } from "react";
import { Form, Input, Upload, Button } from "antd";
import RichEditor from "./RichEditor";
// import { Editor, EditorState, RichUtils } from "draft-js";
// import "./richTextEditor.css";
// import "draft-js/dist/Draft.css";

const AddProduct = () => {
  return (
    <div>
      <Form layout="vertical">
        <Form.Item label="Product name" name="name">
          <Input></Input>
        </Form.Item>

        <Form.Item label="Slug" name="slug">
          <Input></Input>
        </Form.Item>

        <Form.Item label="Product Image" name="photo">
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            // showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          >
            <Button>Select Image</Button>
          </Upload>
        </Form.Item>

        <Form.Item label="Product Gallery" name="photo">
          <Input></Input>
        </Form.Item>

        <Form.Item label="Description">
          <RichEditor />
        </Form.Item>

        <Form.Item label="Short Description">
          <RichEditor />
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProduct;
