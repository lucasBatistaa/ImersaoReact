import styled from "styled-components";

export const StyledFavorites = styled.div`

    padding: 16px 32px;

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    h2 {
        font-size: 16px;
		margin-bottom: 16px;
		text-transform: capitalize;
    }

    p {
        font-size: 14px;
    }

    .add-favorite {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-size: 20px;
        color: inherit;
        background-color: red;
        cursor: pointer;
        border: 0;
    }

    .favorites {
        /* margin-top: 50px; */
        display: flex;
        align-items: center;
        width: 100%;
        
        gap: 16px;
    }

    .perfil {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 8px;
    }

    .close-modal {
        width: 25px;
        height: 25px;
        position: absolute;
        top: 8px;
        right: 16px;
        color: inherit;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    form {
        width: 100%;
        padding: 5%;
        background-color: rgba(0,0,0,0.5);
        position: fixed;
        top: 0; bottom: 0;
        left: 0; right: 0;
        z-index: 100;
        display: flex;
        justify-content: center;
        & > div {
            flex: 1;
            border-radius: 8px;
            max-width: 320px;
            background-color: ${({ theme }) => theme.backgroundLevel2};
            display: flex;
            flex-direction: column;
            position: relative;
            padding: 16px;
            padding-top: 40px;
        }
    }

    input {
        border-radius: 2px;
        border: 1px solid ${({ theme }) => theme.borderBase};
        padding: 8px 10px;
        margin-bottom: 10px;
        outline: none;
        color: #222222;
        background-color: #f9f9f9;
        color: ${({ theme }) => theme.textColorBase};
        background-color: ${({ theme }) => theme.backgroundBase};
    }

    button[type="submit"] {
        background-color: red;
        padding: 8px 16px;
        border: none;
        border-radius: 2px;
        cursor: pointer;
        color: inherit;
    }
`