import styled from "styled-components";

export const Style = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  padding: 10px;

    form {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }

    form input {
        width: 500px;
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 10px;
        color: #303030;
    }

    form button {
        width: 75%;
        height: 30%;
        background-color: #00A3E0;
        color: #fff;
        border: 0;
        align-self: center;
        border-radius: 6px;
        transition: 0.2s;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        text-align: center;
        margin: 10px 0;
        padding: 5px;
        font-size: 20px;
        font-weight: bold;

        &:hover{
            background-color:  #0B84F6;
            color: #fff;
        }

}

    form h1{
        text-align: center;
        color: #00A3E0;
        margin-bottom: 25px;
        font-size: 50px;
        font-weight: bold;
    }
  
`;
