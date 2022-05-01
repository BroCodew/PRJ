import styled, { keyframes } from "styled-components";
export const MainStyled = styled.div`
    /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

*{
    font-family: 'Lato', sans-serif;
}

.title {
    font-size:32px;
    font-weight:600;

}

.subTitle {
    font-size:20px;
    font-weight: 600;
}

.desc {
    font-size: 16px;
    line-height:1.4;
}

.textWhite{
    color:#fff;
}

.textBlue{
    color:rgb(0, 39, 69);;
}
/* a{
    font-family: 'Lato', sans-serif;
} */
.container {
  max-width: 1170px;
  padding-left: 2rem;
  padding-right: 2rem;
  margin: 0 auto;
  }
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
    font-family: 'Lato', sans-serif;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
.notice-home{
    position: absolute;
    left: 0;
    right: 0;
    transform: translateY(-50%);
}
`
export const BannerStyled = styled.div`
        
        .container {
            padding-top:10%;
        }

        h1{
            text-align: center;
            
        }

        p{

        }

        .button {
            text-align: center;
            a{
                color: rgb(0, 113, 188);
                border-radius: 15px 0px;
                background-color: #fff;
                padding:5px 10px;
                font-weight: 600;
            }

            a:hover {
                color: rgba(255, 153, 0, 0.98);
            }

        }

        .desc{
            padding:30px;
            
        }
        
        .banner {
            background-size: cover;
            min-height: 700px;
            background-repeat: no-repeat;
            background-position: center;
            text-align: center;

        }

       
`

export const ServiceStyled = styled.div`
            .service{
                background: rgb(0, 39, 69);
                text-align: center;
                padding: 100px;
                &-list{
                    padding-top: 50px;
                    display: flex;
                    justify-content: space-between;

                }
                &-item{
                    width: 20%;
                    border : 1px solid #fff;
                    border-radius : 15px 0px;
                    padding: 60px 10px;
                    .subTitle{
                        padding: 10px 0px;

                    }
                   
                }
            }

        
        

       
`