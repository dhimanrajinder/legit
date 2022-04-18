import React from 'react';
import { useParallax } from 'react-scroll-parallax';
//import "../Counter/counter";
import logo from "../images/Group.png"
//import cloud from "../images/cloud.png";
import icon1 from "../images/icon.svg";
import icon2 from "../images/icon2.svg";
import icon3 from "../images/icon3.svg";
import png1 from "../images/png1.png";
import png2 from "../images/png2.png";
import png3 from "../images/png3.png";
import png4 from "../images/png4.png";
import logos from "../images/logos.png";
import group18 from "../images/Group 18.png";
import group28 from "../images/Group 28.png";
import success1 from "../images/success1.png";
import nft from "../images/nft.png";
import group156 from "../images/Group156.png";
import "./middleSection.css";



const Middle = () => {
  
    const ref1 = useParallax({ speed: 5 });
    const ref2 = useParallax({scale: [0.8, 1, 'easeInQuad']});
    const ref3 = useParallax({rotateY: [0, 30]});
    const ref4 = useParallax({scale: [0.8, 1, 'easeInQuad']});
    const ref5 = useParallax({rotateY: [0, 30]});
    const ref6 = useParallax({opacity: [2, 0.3]});
    const ref7 = useParallax({ speed: 5 });
    const ref8 = useParallax({ opacity: [1, 0.3] });
    return ( 
        <div>
    <section className="first">
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-5">
                    <div className="logo text-center">
                        <img src={logo} className="img-fluid w-50" alt="Group"/>
                    </div>
                    <div className="title mt-4 text-center">
                        <h1>The Foundation For Multiplication</h1>
                        <p>The First Deflationary MLM Token On The Binance Smart Chain</p>
                    </div>
                    <div className="cloud mt-5">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/M6jMc8_3xo8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
                    </div>
                </div>
            </div>
        </div>

    </section>
    {/*<!-- section two  -->*/}
    <section className="two">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <div className="row">

                        <div className="col-md-3 col-sm-3">
                            <div className="time">
                                <h2 id="days">00 </h2>
                                <p>DAYS
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3  col-sm-3">
                            <div className="time">
                                <h2 id="hours">01</h2>
                                <p>HOURS
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <div className="time">
                                <h2 id="minutes">15</h2>
                                <p>MINUTES
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <div className="time">
                                <h2 id="seconds">28</h2>
                                <p>SECONDS
                                </p>
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                            <button type="button" className="btn btn-warning btn-lg mt-4 b-s-1">BUY TOKENS 20% OFF</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row  mt-5 mb-5 col-md  ml-auto">
            
            <div className="col-md-4 col-lg-4">
                <div className="rect mt-5 m-auto">
                    <div className="box">
                        <img src={icon1} className="img-fluid" alt="icon1"/>
                        <h1>Connect </h1> 
                        <p>Connect your wallet with Metamask</p>


                    </div>
                </div>
            </div>
            
            <div className="col-md-4 col-lg-4">
                <div className="rect mt-5 m-auto">
                    <div className="box">
                        <img src={icon2} className="img-fluid" alt="icon2"/>
                        <h1>Swap</h1>
                        <p>Join by Swapping BNB for Legit Tokens</p>


                    </div>
                </div>
            </div>
            <div className=" col-lg-4  col-md-3 ">
                <div className="rect mt-5 m-auto">
                    <div className="box">
                        <img src={icon3} className="img-fluid" alt="icon3"/>
                        <h1>Refer </h1>
                        <p>Share your referral link <br/>and earn when members join Legit</p>


                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>

    {/*<!-- section five-->*/}
    <section className="five p-5"  >
        <div className="container" >
       
            <h1 ref={ref1.ref} className="text-center text-white col-md-11 mt-5">Future technology will see a mass merger between the Metaverse, Cryptocurrency Payments and Community building.</h1>
           
            <div className="row">
                <div className="col-md-6">
                    <img src={png1} className="img-fluid" alt="png1"/>
                </div>
                <div className="col-md-6">
                    <div className="para" ref={ref2.ref}>
                        <h1>Epic Vision</h1>
                        <p>We will be the primary technology that network marketing companies use to accept
                            cryptocurrencies in the future.<br/>We are passionate about marketing and growth, are you
                            ready for lift off? Legit</p>
                    </div>
                </div>
                <div className="col-md-6 planeetext">
                    <div className="para" ref={ref3.ref}>
                        <h1 >Deflationary Foundation</h1>
                        <p >We will be the primary technology that network marketing companies use to accept
                            cryptocurrencies in the future.<br/>We are passionate about marketing and growth, are you
                            ready for lift off? Legit
                            ready for lift off? Legit</p>
                    </div>
                </div>
                <div className="col-md-6 planee">
                    <img src={png2} className="img-fluid" alt="png2"/>
                </div>

                <div className="col-md-6">
                    <img src={png3} className="img-fluid" alt="png3"/>
                </div>
                <div className="col-md-6">
                    <div className="para" ref={ref4.ref}>
                        <h1 >Earn 7 Levels Deep</h1>
                        <p >Legit members refer others to the platform using your unique affiliate link to earn more
                            legit coins when they purchase.<br/>A simple, gamified community committed to helping each
                            other through the use of leverage.</p>
                    </div>


                </div>
                <div className="col-md-6">
                    <div className="para"  ref={ref5.ref}>
                        <h1 >Fully Automated Smart Contract</h1>
                        <p >Automatically earn coins when members you refer join, commission is our mission to the
                            moon.<br/>Simplicity and Efficiency is the secret sauce to success. </p>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={png4} className="img-fluid" alt="png4"/>
                </div>
            </div>
        </div>
    </section>
    {/*<!-- section four -->*/}
    <section className="four">
        <div className="container">
            <div className="row">
                <div className="text mb-5">
                    <h1 className="col-md-8 m-auto" ref={ref6.ref} >The Global MLM Market is valued at over $170 Billion Annually.
                    </h1>
                </div>
                <div className="col-md-4">
                    <div className="square">
                        <h1>Larger than<br/>the NFL </h1>
                        <p>
                            9 Billion
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="square">
                        <h1>Larger than the<br/> Music Industry </h1>
                        <p className="dd">
                            16 Billion
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="square">
                        <h1>Larger than the<br/> Movie Industry
                        </h1>
                        <p className='dd1'>
                            80 Billion
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*<!-- section three -->*/}
    <section className="three">
        <div className="container">
            <div className="row">
                <div className="col-md-6 mb-5" >
                    <img src={group156} className="img-fluid" alt="img" />
                </div>
                <div className="col-md-6">
                    <div className="tableborder mb-5">


                        <table className="table  text-dark text-center" >
                            <thead>
                                <tr>

                                    <td colspan="2">
                                        <h1 className="text-white">Affiliate Program</h1>
                                    </td>

                                </tr>
                                <tr className="tablebg">
                                    <th scope="col">Level</th>
                                    <th scope="col">Reward</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white">
                                    <th scope="row">1</th>
                                    <td>6%</td>

                                </tr>
                                <tr className="tablebg">
                                    <th scope="row">2</th>
                                    <td>4%</td>
                                </tr>

                                <tr className="bg-white">
                                    <th scope="row">3</th>
                                    <td>2%</td>
                                </tr>

                                <tr className="tablebg">
                                    <th scope="row">4</th>
                                    <td>1%</td>
                                </tr>

                                <tr className="bg-white">
                                    <th scope="row">5</th>
                                    <td>1%</td>
                                </tr>

                                <tr className="tablebg">
                                    <th scope="row">6</th>
                                    <td>0.5%</td>
                                </tr>

                                <tr className="bg-white">
                                    <th scope="row">7</th>
                                    <td className="td-01">0.5%</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>


                <table className="table  text-dark col-md-8">
                    <thead>
                        <tr className="bgcol">

                            <td colspan="2">
                                <h1 className="text-white text-center">Buy Taxes - Total 15%</h1>
                            </td>

                        </tr>
                        <tr className="tablebg">
                            <th scope="col">Referral Rewards</th>
                            <th scope="col">12%</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <th scope="row">Liquidity</th>
                            <td>3%</td>

                        </tr>

                    </tbody>
                </table>


                <table className="table  text-dark m-auto  col-md-8">
                    <thead>
                        <tr className="bgcoll">

                            <td colspan="2">
                                <h1 className="text-white text-center">Sell Taxes - Total 18%</h1>
                            </td>

                        </tr>
                        <tr className="tablebg">
                            <th scope="col">Holder Rewards</th>
                            <th scope="col">12%</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <th scope="row">Liquidity</th>
                            <td>3%</td>

                        </tr>

                        <tr className="tablebg">
                            <th scope="col">Marketing & Development</th>
                            <th scope="col">10%</th>

                        </tr>

                        <tr className="bg-white">
                            <th scope="col">Burned</th>
                            <th scope="col">1%</th>

                        </tr>

                    </tbody>
                </table>

            </div>



        </div>

    </section>




    <section className="comingSoon p-5">

        <div className="col-md-12 text-white text-center"  ref={ref7.ref}>
            <h1 className="mt-2">Coming Soon</h1>
            <h1 className="mt-4">The Legit NFT Marketplace & Launchpad</h1>
            <h4 className="mt-4 col-md-8 m-auto">A gamified ecosystem that leverages community growth alongside educational
                utility.</h4>
        </div>

        <div className="container">
            <div className="row mt-5">
                <div className="col-md text-white m-auto">
                    <p><img src={success1} className="pimg mr-3" alt="img" />Every single NFT transaction will benefit
                        token holders
                    </p>
                    <p><img src={success1} className="pimg mr-3" alt="img" />Every single NFT transaction will benefit
                        token holders
                    </p>
                    <p><img src={success1} className="pimg mr-3" alt="img" />Every single NFT transaction will benefit
                        token holders
                    </p>
                </div>
                <div className="col-md text-center">
                    <img src={nft} className="nft w-75" alt="img" />
                </div>
            </div>
        </div>
    </section>



    {/*<!-- section five -->*/}
    <section className="six mt-5 mb-2 p-5">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="pics">
                        <img src={group28} className="img-fluid" alt="img" />
                        <div>
                            <row>
                                <div className="col d-flex">

                                    <p className="text-warning">40%</p>

                                    <div className="progress-bar  ml-2 mr-2 mt-2" role="progressbar"
                                        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    <p>Community</p>

                                </div>
                                <div className="col d-flex">

                                    <p className='pb1'>40%</p>

                                    <div className="progress-bar  ml-2 mr-2 mt-2" role="progressbar"
                                        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    <p>Liquidity</p>

                                </div>

                                <div className="col d-flex">

                                    <p className='pb2'>15%</p>

                                    <div className="progress-bar   ml-2 mr-2 mt-2" role="progressbar"
                                        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    <p>Advisors & Team</p>

                                </div>

                                <div className="col d-flex">

                                    <p className='pb3'>5%</p>

                                    <div className="progress-bar   ml-2 mr-2 mt-2" role="progressbar"
                                        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    <p>Marketing & Development</p>

                                </div>


                            </row>
                        </div>
                        <button type="button" className="btn btn-warning btn-lg mt-4" >BUY TOKENS 20% OFF</button> 


                    </div>
                </div>
                <div className="col-md-6">
                    <div className="pie ">
                        <h1 className='pb1'>Tokenomics</h1>
                        <div className="row">
                            <div className="col">
                                Name:
                            </div>
                            <div className="col">
                                LEGIT COIN
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col">
                                Purchase methods accepted:

                            </div>
                            <div className="col">
                                BNB
                            </div>
                        </div>
                        <div className="mt-5 piesha p-3">
                            <div className="row">
                                <div className="col mt-2 mb-2">
                                    <p>Hard cap </p>
                                    <h4 className='pb1'>1000 BNB</h4>
                                </div>
                                <div className="col mt-2 mb-2">
                                    <p>Soft cap </p>
                                    <h4 className='softcap'>500 BNB</h4>
                                </div>
                                <div className="col mt-2 mb-2">
                                    <p>Cost of 1 Legit Coin </p>
                                    <h4 className='cost'>0.0001 BNB</h4>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5 piesha p-3">

                            <div className="row">
                                <div className="col mt-3">
                                    New Token emissions:

                                </div>
                                <div className="col mt-3">
                                    100,000,000,000,000
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    Tokenomics

                                </div>
                                <div className="col">
                                    100%
                                </div>
                            </div>
                            <div className="border-bottom mt-2"></div>
                            <div className="row mt-2">
                                <div className="col">
                                    Community

                                </div>
                                <div className="col">
                                    40%
                                </div>
                            </div>

                            <div className="row mt-2">
                                <div className="col">
                                    Liquidity

                                </div>
                                <div className="col">
                                    40%
                                </div>
                            </div>

                            <div className="row mt-2">
                                <div className="col">
                                    Advisors & Team

                                </div>
                                <div className="col">
                                    15%
                                </div>
                            </div>

                            <div className="row mt-2 mb-2">
                                <div className="col ">
                                    Marketing & Development

                                </div>
                                <div className="col">
                                    5%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
            <div className="col-md-6 mt-5">
            <div className="row">
                <div className="col special">
                   <p><b>Contract Address:</b> HY6657u55t890dijghyfiuviyfi87589</p>
                  
                </div>
                
            </div>
            </div>
        </div>

    </section>
   
    {/*</div><!-- section seven-->*/}
    <section className="eight">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="road text-white">
                        <h1>Road Map</h1>
                    </div>
                </div>
                <div className="col-md-3">
                    <h1 className='d1'>Q1 - 2022</h1>
                    <p className="text-white mt-4"> <img src={group18} className="ryt mr-1" alt="img" /> Listing on Coingecko</p>
                    <p className="text-white"> <img src={group18} className="ryt mr-1" alt="img" />  Listing on Coinmarketcap</p>
                    <p className="text-white"> <img src={group18} className="ryt mr-1" alt="img" />   Website Updates and Optimization</p>
                    <p className="text-white"> <img src={group18} className="ryt mr-1" alt="img" />   Influencer Marketing Push</p>
                    <p className="text-white"> <img src={group18} className="ryt mr-1" alt="img" />   Develop Sales and Marketing</p>
                    <p className="text-white"> <img src={group18} className="ryt mr-1" alt="img" />   Creat Educational Content</p>
                    <p className="text-white"> <img src={group18} className="ryt mr-1" alt="img" />   Dessert Finance Audit</p>
                    <p className="text-white"> <img src={group18} className="ryt mr-1" alt="img" />    5,000 Hodlers</p>
                </div>
                <div className="col-md-3">
                    <h1 className='d1'>Q2 - 2022</h1>
                   <p className="text-white mt-4"> <img src={group18} className="ryt mr-1" alt="img" /> AMA on TG/Reddit</p>
                   <p className="text-white"> <img src={group18} className="ryt mr-1" alt="img" />   Viral Marketing Tools </p>
                   <p className="text-white"> <img src={group18} className="ryt mr-1" alt="img" />   NFT & Launchpad Platform</p>
                   <p className="text-white"> <img src={group18} className="ryt mr-1" alt="img" />   Development and launch</p>
                   <p className="text-white"> <img src={group18} className="ryt mr-1" alt="img" />   Scale Community Growth</p>
                   <p className="text-white"> <img src={group18} className="ryt mr-1" alt="img" />    10,000 Hodlers</p>
                </div>
                <div className="col-md-3">
                    <h1 className='d1'>Q3 - 2022</h1>
                     <p className="text-white mt-4"> <img src={group18} className="ryt mr-1" alt="img" /> Backend Tech Software</p>
                     <p className="text-white"> <img src={group18} className="ryt mr-1" alt="img" /> Development </p>
                     <p className="text-white"> <img src={group18} className="ryt mr-1" alt="img" /> Mobile App Development</p>
                     <p className="text-white"> <img src={group18} className="ryt mr-1" alt="img" />  25,000 Hodlers</p>
                </div>
                <div className="col-md-3">
                    <h1 className='d1'>Q4 - 2022</h1>
                    <p className="text-white mt-4"> <img src={group18} className="ryt mr-1" alt="img" /> White Label MLM Platform</p>
                    <p className="text-white"> <img src={group18} className="ryt mr-1" alt="img" />  Networking Contests and 1 Year </p>
                    <p className="text-white"> <img src={group18} className="ryt mr-1" alt="img" /> Online Event</p>
                    <p className="text-white"> <img src={group18} className="ryt mr-1" alt="img" /> 100,000 Hodlers</p>
                </div>
            </div>
        </div>
    </section>
    {/*<!-- section eight -->*/}
    <section className="nine p-5"  >
        <div className="container">
            <h1 className="text-center mt-5" ref={ref8.ref}>Frequency Asked Questions
            </h1>
            <div id="accordion" className="accordion">  

                <div className="card">
                  <div className="card-header" id="infraOne">
                    <a href="#collapseOne" className="" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <p className="mb-0">What is Legit?
              
                      </p>
                    </a>
                  </div>
                  <div id="collapseOne" className="collapse show" aria-labelledby="infraOne" data-parent="#accordion">
                    <div className="card-body col-md-11">
                        The primary Legit platform will serve as a hybrid affiliate referral structure that allows members to unlock a multitude of educational training and access to an amazing collaborative ecosystem.<br/><br/>We will be the first platform to reward users in exchange for helping build a thriving network. This includes several diverse players which include crypto entrepreneurs, artists, gamers and metaverse enthusiasts.<br/><br/>This foundation will serve as a building block for the next phase of Legit’s evolution which is to launch an NFT Marketplace and Launchpad that primarily benefits the Legit Coin holder community as a whole. 
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="infraTwo">
                    <a href="#collapseTwo" className="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <p className="mb-0">How do I buy Legit Tokens?
              
                      </p>
                    </a>
                  </div>
                  <div id="collapseTwo" className="collapse" aria-labelledby="infraTwo" data-parent="#accordion">
                    <div className="card-body col-md-11">Connect your Wallet using either Metamask or Trust Wallet and simply Swap BNB for Legit tokens. 
              
                    </div>
                  </div>
                </div>

                <div className="card">
                    <div className="card-header" id="infraThree">
                      <a href="#collapseThree" className="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <p className="mb-0">How does the compensation plan work?
                
                        </p>
                      </a>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="infraThree" data-parent="#accordion">
                      <div className="card-body col-md-11">When you refer a friend you will instantly earn a percentage of their token purchase value rewarded as Legit tokens 7 levels deep. 
                
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="infraFour">
                      <a href="#collapseFour" className="collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        <p className="mb-0">How do I refer friends?
                
                        </p>
                      </a>
                    </div>
                    <div id="collapseFour" className="collapse" aria-labelledby="infraFour" data-parent="#accordion">
                      <div className="card-body col-md-11">Simply connect your wallet with either Trust Wallet or Metamask, Find your referral link, Copy it and send it to anyone you'd like to refer to Legit.
                
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="infraFive">
                      <a href="#collapseFive" className="collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        <p className="mb-0">What type of Education will be offered?
                
                        </p>
                      </a>
                    </div>
                    <div id="collapseFive" className="collapse" aria-labelledby="infraFive" data-parent="#accordion">
                      <div className="card-body col-md-11">Legit is in the process of outlining the educational trainings available to members. Check back frequently for an update coming soon.
                
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="infraSix">
                      <a href="#collapseSix" className="collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        <p className="mb-0">Where can I get more Answers to my Questions?
                
                        </p>
                      </a>
                    </div>
                    <div id="collapseSix" className="collapse" aria-labelledby="infraSix" data-parent="#accordion">
                      <div className="card-body col-md-11">Discord and Telegram will have all of the information you're looking for. Click on our social icon links at the bottom of this page.
                
                      </div>
                    </div>
                  </div>
              
              
              </div>
        </div>

    </section>
    {/*<!-- section nine -->*/}
    <section className="ten p-5">
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6">
                    <div className="contact">
                        <div className="last">
                            <img src={logo} className="img-fluid" alt="img" />
                        </div>
                        
                        <h1 className="mt-2">CONTACT US</h1>
                        <p className="mt-5">Stay connected:</p>
                        <img src={logos} className="img-fluid w-50" alt="img" />
                    </div>
                </div>
                <div className="col-md-6">
                    <form>
                        <div className="form-group">
                            <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <input type="Email" className="form-control" id="exampleInputPassword1" placeholder="Email" />
                        </div>
                        <div className="form-group">
                           
                            <textarea className="form-control" placeholder="Type Your Message Here..." id="exampleFormControlTextarea1" rows="5"></textarea>
                          </div>
                          <button type="button" className="btn btn-warning btn-lg mt-4">SEND MESSAGE</button>
                    </form>
                </div>
               
                <div className="col-md-3">
                    <div className="table">
                        <p>© 2022, Legit coin
                        </p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="table">
                        <p>Terms & Conditions

                        </p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="table">
                        <p>Privacy Policy
                        </p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="table">
                        <p>Risk Disclosure Policy</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div> 
     );
}
 
export default Middle;