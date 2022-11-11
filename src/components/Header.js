import config from '../../config.json';
import styled from 'styled-components';
import { style } from '@mui/system';

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info {
        /* margin-top: 50px; */
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

const StyledBanner = styled.div`
    background-color: gray;
    background-image: url(https://images.unsplash.com/photo-1548263594-a71ea65a8598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80);
    height: 350px;
`

export default function Header() {
    return (
        <StyledHeader>
            <StyledBanner>

            </StyledBanner>

            <section className='user-info'>
                <img src={`https://github.com/${config.github}.png`} alt="" />

                <div>
                    <h2>
                        {config.name}
                    </h2>

                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}