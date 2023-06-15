import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Box from './card';

function App() {
    let priceData = [
        {
            plan: "Free",
            cost: 0,
            duration: "month",
            features: [
                {
                    name: "Single User",
                    isCheck : true
                },
                {
                    name: "5 GB Storage",
                    isCheck : true
                },
                {
                    name : "Unlimited Public Projects",
                    textBold: true,
                    isCheck : true
                },
                {
                    name: "Community Access",
                    isCheck : true
                },
                {
                    name: "Unlimited Private Projects",
                    textMute : true,
                },
                {
                    name: "Dedicated Phone Support",
                    textMute : true
                },
                {
                    name: "Free Subdomain",
                    textMute : true
                },
                {
                    name: "Monthly Status Reports",
                    textMute : true
                }
            ]
        },
        {
            plan: "Plus",
            cost: 9,
            duration: "month",
            features: [
                {
                    name: "5 User",
                    textBold: true,
                    isCheck : true
                },
                {
                    name: "50 GB Storage",
                    isCheck : true
                },
                {
                    name : "Unlimited Public Projects",
                    textBold: true,
                    isCheck : true
                },
                {
                    name: "Community Access",
                    isCheck : true
                },
                {
                    name: "Unlimited Private Projects",
                    textBold: true,
                    isCheck : true
                },
                {
                    name: "Dedicated Phone Support",
                    isCheck : true
                },
                {
                    name: "Free Subdomain",
                    textBold: true,
                    isCheck : true
                },
                {
                    name: "Monthly Status Reports",
                    textMute : true
                }
            ]

        },
        {
            plan: "Pro",
            cost: 49,
            duration: "month",
            features: [
                {
                    name: "Unlimited Users",
                    textBold : true,
                    isCheck : true
                },
                {
                    name: "150 GB Storage",
                    isCheck : true
                },
                {
                    name : "Unlimited Public Projects",
                    textBold: true,
                    isCheck : true
                },
                {
                    name: "Community Access",
                    isCheck : true
                },
                {
                    name: "Unlimited Private Projects",
                    textBold: true,
                    isCheck : true
                },
                {
                    name: "Dedicated Phone Support",
                    isCheck : true
                },
                {
                    limit:"Unlimited",
                    name: "Free Subdomains",
                    isCheck : true
                },
                {
                    name: "Monthly Status Reports",
                    isCheck : true
                }
            ]
        }
    ]
    return (
        <section class="pricing py-5">
            <div class="container">
                <div class="row">
                    {
                            priceData.map((card)=>{
                            return <Box priceCard={card}/>
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default App;