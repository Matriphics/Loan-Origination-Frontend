import React from "react"
import ChatBot from "react-simple-chatbot"
import img from "./chatbot.png"
import userimg from "./userchat.png"
import { ThemeProvider } from "styled-components"
// import { Segment } from "@mui/icons-material"


export default function Chatbot() {

    const steps = [
        {
            id: 'Greet',
            message: 'Hello, Welcome to SCB Help Center',
            trigger: '1'
        },
        {
            id: '1',
            message: 'Please Enter your name',
            trigger: '2'
        },
        {
            id: '2',
            user: true,   
            trigger: '3'
        },
        {
            id: '3',
            message: 'Hi {previousValue}, How Can I help you?',
            trigger: '4'
        },
        {
            id: '4',
            message: 'Please, Select any of the below options',
            trigger: '5'
        },
        {
            id: '5',
            options: [
                {
                    value: 'My applications',
                    label: 'My applications',
                    trigger: '61'
                },
                {
                    value: 'My account',
                    label: 'My account',
                    trigger: '62'
                },
                {
                    value: 'FAQ',
                    label: 'FAQ',
                    trigger: '63'
                },
                {
                    value: 'Something else',
                    label: 'Something else',
                    trigger: '64'
                }
            ],
        },
        {
            id: '61',
            message: 'Visit http://localhost:3000/basicdetails',
            trigger: '10'
        },
        {
            id: '62',
            message: 'Visit http://localhost:3000/dashboard',
            trigger: '10'
        },
        {
            id: '63',
            options: [
                {
                    value: 'How do I apply for loan?',
                    label: 'How do I apply for loan?',
                    trigger: '631'
                },
                {
                    value: 'What affects my eligibility for loan?',
                    label: 'What affects my eligibility for loan?',
                    trigger: '632'
                },
                {
                    value: 'Can I pay my loan early?',
                    label: 'Can I pay my loan early?',
                    trigger: '633'
                },
            ],
        },
        {
            id: '631',
            message: 'You can apply for a loan by filling out an application with the lender. This typically involves providing personal and financial information.',
            trigger: '10'
        },
        {
            id: '632',
            message: 'Lenders consider factors like your credit score, income, employement history, and debt-to-income ratio to determine your eligibility for a loan.',
            trigger: '10'
        },
        {
            id: '633',
            message: 'Yes,many loans allow for early repayment.However,some loans might have prepayment penalities or fees for paying off the loan before agreed-upon-terms.',
            trigger: '10'
        },
        {
            id: '64',
            message: 'Sure, what questions do you have?',
            trigger: '7'
        },
        {
            id: '7',
            user: true,
            trigger: '8'
        },
        
        {
            id: '8',
            message: 'Thanks for telling your issue',
            trigger: '9'
        },
        {
            id: '9',
            message: 'Our team will contact you.',
            end: true
        },
        {
            id: '10',
            message: 'Do you need any other help?',
            trigger: '11'
        },
        {
            id: '11',
            options: [
                {
                    value: 'Yes',
                    label: 'Yes',
                    trigger: '64'
                },
                {
                    value: 'No',
                    label: 'No',
                    trigger: '13'
                }
            ],
        },
        {
            id: '13',
            message: 'Thank you for contacting us.',
            end: true
        }
    ]

    const config = {
        botAvatar: img,
        floating: true,
        botDelay: 2000,
        userAvatar: userimg
        
    }

    const theme = {
        background: 'white',
        headerBgColor: '#017aa7',
        headerFontSize: '20px',
        botBubbleColor: '#017aa7',
        headerFontColor: 'white',
        botFontColor: 'white',
        userBubbleColor: '#017aa7',
        userFontColor: 'white',
    }

    return (
        <div>
            <ThemeProvider theme={theme}>
                <ChatBot steps={steps}
                    {...config}
                >

                </ChatBot>
            </ThemeProvider>

            {/* <ChatBot steps={steps}
                {...config}
            >
            </ChatBot> */}

            {/* <Segment floated="right" >

            </Segment> */}
        </div>
    )
}