import styled, { keyframes } from "styled-components";
const textHeading = "3.2rem";
const textNormal = "1.6rem";
const textWhite = "#fff";
const textColor = "#002745";
const colorHover = "#ff9900fa";

export const AboutStyled = styled.div`
    .notice-about{
        background-color:#F4F4F4;
        padding: 8.5rem 0;
    }
    .team{
        min-height: 67.5rem;
        background-repeat: no-repeat;
        background-size: cover;
        text-align: center;
        .title,.subtitle{
            color: ${textWhite};
        }
        &-list{
            display:flex;
            margin-top: 7rem;
            justify-content:space-between;
        }
        &-img{
            img{
                border-radius: 1rem;
            }
        }
        .subtitle{
            padding-top: 7rem;
        }
        &-name{
            color: ${textWhite};
            text-transform: uppercase;
            padding-top: 2.5rem;
        }
        
        
    }
`;
