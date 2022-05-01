import styled, { keyframes } from "styled-components";
export const NoticeStyled = styled.div`

    .notice{
        background-color:transparent;
        
        

        &-list{
            display:flex;
            box-shadow: rgb(0 0 0 / 25%) 0px 1px 4px;
            /* border-radius:15px 0px ; */
        }
        &-item{
            background-color:#fff;
            width:20%;
            text-align:center;
            padding: 90px;
            :first-child{
                border-radius: 15px 0px 0px;
            }
            :last-child{
                border-radius: 0px 0px 15px;

            }
        }
        .active{
            
            background: linear-gradient(180.24deg, rgb(41, 171, 226) 6.97%, rgb(0, 113, 188) 89.79%);
        }
        .number{
            font-size: 32px;

        }
        .desc{
            font-size: 16px;
            font-weight: 600;
        }
    }

    .container{
       

    }
    

`