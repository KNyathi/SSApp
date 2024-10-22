/* eslint-disable @typescript-eslint/no-unused-vars */
import { styles } from '../../styles/style';
import React, { FC, useRef, useState } from 'react'
import {toast} from 'react-hot-toast';
import { VscWorkspaceTrusted } from 'react-icons/vsc';

type Props = {
    setRoute: (route: string) => void;
}

//for our four digit OTP code
type VerifyNumber = {
    "0": string;
    "1": string;
    "2": string;
    "3": string;
};

const Verification:FC<Props> = ({setRoute}) => {
    const [invalidError, setInvalidError] = useState<boolean>(false);
    const inputRefs = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ];

    const [verifyNumber, setVerifyNumber] = useState<VerifyNumber>({
        0: "",
        1: "",
        2: "",
        3: "",
    });

    const verificationHandler = async () => {
        console.log("test");
        setInvalidError(true);
    }

    const handleInputChange = (index:number, value: string) => {
        setInvalidError(false);
        const newVerifyNumber = {...verifyNumber, [index]: value};
        setVerifyNumber(newVerifyNumber);

        if(value === "" && index > 0) {
           inputRefs[index - 1].current?.focus(); 
        } else if(value.length === 1 && index < 3) {
            inputRefs[index + 1].current?.focus();
        }
    };

  return (
    <div>
        <h1 className={`${styles.title}`}>
            Verify Your Account
        </h1>
        <br/>
        <div className="w-full flex items-center justify-center mt-2">
           <div className="w-[60px] h-[60px] rounded-full bg-[#c98500ff] flex items-center justify-center">
                <VscWorkspaceTrusted size={40} />
            </div> 
      
        </div>
        <br/>
        <br/>

        <div className="n-auto flex items-center justify-around">
            {Object.keys(verifyNumber).map((key, index) => (
                <input 
                type="number"
                key={key}
                ref={inputRefs[index]}
                className={`w-[65px] h-[65px] bg-transparent border-[3px] rounded-[10px] flex items-center text-white dark:text-black justify-center text-[18px] font-Poppins outline-none text-center ${
                  invalidError
                  ? "shake border-red-500"
                  : "dark:border-black border-white"
                }`}
                placeholder=""
                maxLength={1}
                value={verifyNumber[key as keyof VerifyNumber]}
                onChange={(e) => handleInputChange(index, e.target.value)}
                />
            ))}
        </div> 
        <br/>
        <br/>
        <div className="w-full flex justify-center">
            <button 
            className={`${styles.button}`}
            onClick={verificationHandler}
            >
                Verify OTP
            </button>
        </div>
        <br/>

        <h5
        className="text-center pt-4 font-Poppies text-[14px] text-white dark:text-black"
        >
          Go back to log in?{" "}  
          <span
          className="text-[#c98500ff] pl-1 cursor-pointer"
          onClick={() => setRoute("Login")}
          >
            Login
          </span>
        </h5>
    </div>
  )
}

export default Verification;