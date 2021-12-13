import {
  Button,
  Checkbox,
  Pagination,
  Textarea,
  TextField
} from 'bw-components'
import { useState } from 'react'
import CardWrapper from './components/CardWrapper'

interface FrameProps {
  children: JSX.Element | JSX.Element[]
}
const Frame = ({ children }: FrameProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 mx-10 border border-black-10 rounded-lg p-6 mb-4">
      {children}
    </div>
  )
}

const Test = () => {
  const [field, setField] = useState({
    username: '',
    password: '',
    email: '',
    comment: '',
    terms: false
  })

  const setFieldByKey = (key: keyof typeof field, value: any) => {
    setField({ ...field, [key]: value })
  }
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-col">
        <div className="flex-grow overflow-y-auto p-8">
          <div className="grid grid-cols-1 gap-5 container mx-auto">
            <CardWrapper>
              <h3 className="text-lg font-bold mb-5">Button</h3>
              <div className="grid grid-cols-4 gap-5">
                <Button text="Normal"></Button>
                <Button text="Primary" type="primary"></Button>
                <Button text="Neutral" type="neutral"></Button>
                <Button text="Warning" type="warning"></Button>
                <Button
                  text="With Icon"
                  type="primary"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 25 31"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.5 0.4375C16.4448 0.4375 19.6428 3.61102 19.6428 7.52576H24.9999V23.8681C24.9999 27.5654 22.0152 30.5626 18.3333 30.5626H6.66665C2.98476 30.5626 0 27.5654 0 23.8681V7.52576H5.35713C5.35713 3.61102 8.55509 0.4375 12.5 0.4375ZM13.392 12.9896H6.2492V16.5759H9.82061V25.5417H13.392V12.9896ZM16.9654 12.9902C15.9792 12.9902 15.1797 13.7931 15.1797 14.7834C15.1797 15.7737 15.9792 16.5766 16.9654 16.5766C17.9516 16.5766 18.7511 15.7737 18.7511 14.7834C18.7511 13.7931 17.9516 12.9902 16.9654 12.9902ZM12.5017 2.20898C9.64867 2.20898 7.31657 4.42215 7.15363 7.21281L7.14453 7.52518H17.8588C17.8588 4.69398 15.6286 2.3797 12.8164 2.21801L12.5017 2.20898Z"
                      />
                    </svg>
                  }
                ></Button>
                <Button
                  text="With Icon"
                  type="outline"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 25 31"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.5 0.4375C16.4448 0.4375 19.6428 3.61102 19.6428 7.52576H24.9999V23.8681C24.9999 27.5654 22.0152 30.5626 18.3333 30.5626H6.66665C2.98476 30.5626 0 27.5654 0 23.8681V7.52576H5.35713C5.35713 3.61102 8.55509 0.4375 12.5 0.4375ZM13.392 12.9896H6.2492V16.5759H9.82061V25.5417H13.392V12.9896ZM16.9654 12.9902C15.9792 12.9902 15.1797 13.7931 15.1797 14.7834C15.1797 15.7737 15.9792 16.5766 16.9654 16.5766C17.9516 16.5766 18.7511 15.7737 18.7511 14.7834C18.7511 13.7931 17.9516 12.9902 16.9654 12.9902ZM12.5017 2.20898C9.64867 2.20898 7.31657 4.42215 7.15363 7.21281L7.14453 7.52518H17.8588C17.8588 4.69398 15.6286 2.3797 12.8164 2.21801L12.5017 2.20898Z"
                      />
                    </svg>
                  }
                ></Button>
                <Button
                  text="With Icon"
                  type="warning"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 25 31"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.5 0.4375C16.4448 0.4375 19.6428 3.61102 19.6428 7.52576H24.9999V23.8681C24.9999 27.5654 22.0152 30.5626 18.3333 30.5626H6.66665C2.98476 30.5626 0 27.5654 0 23.8681V7.52576H5.35713C5.35713 3.61102 8.55509 0.4375 12.5 0.4375ZM13.392 12.9896H6.2492V16.5759H9.82061V25.5417H13.392V12.9896ZM16.9654 12.9902C15.9792 12.9902 15.1797 13.7931 15.1797 14.7834C15.1797 15.7737 15.9792 16.5766 16.9654 16.5766C17.9516 16.5766 18.7511 15.7737 18.7511 14.7834C18.7511 13.7931 17.9516 12.9902 16.9654 12.9902ZM12.5017 2.20898C9.64867 2.20898 7.31657 4.42215 7.15363 7.21281L7.14453 7.52518H17.8588C17.8588 4.69398 15.6286 2.3797 12.8164 2.21801L12.5017 2.20898Z"
                      />
                    </svg>
                  }
                ></Button>
                <Button
                  text="With Icon"
                  type="secondary"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 25 31"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.5 0.4375C16.4448 0.4375 19.6428 3.61102 19.6428 7.52576H24.9999V23.8681C24.9999 27.5654 22.0152 30.5626 18.3333 30.5626H6.66665C2.98476 30.5626 0 27.5654 0 23.8681V7.52576H5.35713C5.35713 3.61102 8.55509 0.4375 12.5 0.4375ZM13.392 12.9896H6.2492V16.5759H9.82061V25.5417H13.392V12.9896ZM16.9654 12.9902C15.9792 12.9902 15.1797 13.7931 15.1797 14.7834C15.1797 15.7737 15.9792 16.5766 16.9654 16.5766C17.9516 16.5766 18.7511 15.7737 18.7511 14.7834C18.7511 13.7931 17.9516 12.9902 16.9654 12.9902ZM12.5017 2.20898C9.64867 2.20898 7.31657 4.42215 7.15363 7.21281L7.14453 7.52518H17.8588C17.8588 4.69398 15.6286 2.3797 12.8164 2.21801L12.5017 2.20898Z"
                      />
                    </svg>
                  }
                ></Button>
              </div>
            </CardWrapper>
            <CardWrapper>
              <h3 className="text-lg font-bold mb-5">Pagination</h3>
              <div className="flex justify-center">
                <Pagination
                  total={100}
                  current={1}
                  itemPerPage={10}
                ></Pagination>
              </div>
            </CardWrapper>
            <CardWrapper>
              <h3 className="text-lg font-bold mb-5">Form</h3>
              <Frame>
                <div className="grid grid-cols-2 gap-4">
                  <TextField
                    label="Username"
                    placeholder="Masukan username"
                    value={field.username}
                    onInput={(value) => setFieldByKey('username', value)}
                    id="input_username"
                  ></TextField>
                  <TextField
                    label="Password"
                    type="password"
                    placeholder="Masukan password"
                    value={field.password}
                    onInput={(value) => setFieldByKey('password', value)}
                    id="input_password"
                  ></TextField>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <TextField
                    label="Email"
                    placeholder="muhaimin.rezki@bukuwarung.com"
                    icon={
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    }
                    value={field.email}
                    onInput={(value) => setFieldByKey('email', value)}
                    id="input_email"
                  ></TextField>
                </div>
                <Textarea
                  label="Komentar"
                  placeholder="Tulis komentar anda"
                  value={field.comment}
                  onInput={(value) => setFieldByKey('comment', value)}
                  id="input_comment"
                ></Textarea>
                <Checkbox
                  label="Saya setuju dengan semua persyaratan"
                  id="termbox"
                  value={field.terms}
                  onSelect={(value) => setFieldByKey('terms', value)}
                ></Checkbox>
                <div className="mt-4 mb-4 flex justify-center">
                  <Button text="Simpan" size="lg" type="primary"></Button>
                </div>
              </Frame>

              <Frame>
                <div className="grid grid-cols-2 gap-4 mb-1">
                  <TextField
                    label="Error Field"
                    placeholder="Example with error message"
                    id="afield"
                    error="This is an error message"
                  ></TextField>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-1">
                  <TextField
                    label="Large Input"
                    placeholder=""
                    id="lg"
                    size="lg"
                  ></TextField>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-1">
                  <TextField
                    label="Small Input"
                    placeholder=""
                    id="sm"
                    size="sm"
                  ></TextField>
                </div>
              </Frame>
            </CardWrapper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test
