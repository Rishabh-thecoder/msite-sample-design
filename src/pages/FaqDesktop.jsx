import React from 'react'
import Topheader from '../components/Topheader'
import faqdata from '../json/faq/faqData.json'

export default function FaqDesktop() {
    const btnClick0 = () => {
        document.getElementById("mainhome").style.display = "none";
        document.getElementById("viewall").style.display = "block";
      }
    
      const btnClick1 = () => {
        document.getElementById("mainhome").style.display = "none";
        document.getElementById("legal").style.display = "block";
      }
      const btnClick2 = () => {
        document.getElementById("mainhome").style.display = "none";
        document.getElementById("privacyPolicy").style.display = "block";
      }
      const btnClick3 = () => {
        document.getElementById("mainhome").style.display = "none";
        document.getElementById("terms").style.display = "block";
      }
      const kycbtn = () => {
        document.getElementById("viewall").style.display = "none";
        document.getElementById("accountandkyc").style.display = "block";
      }
      const myaccountbtn = () => {
        document.getElementById("viewall").style.display = "none";
        document.getElementById("myaccount").style.display = "block";
      }
    
      const depositbtn = () => {
        document.getElementById("viewall").style.display = "none";
        document.getElementById("deposit").style.display = "block";
      }
      const withdrawalbtn = () => {
        document.getElementById("viewall").style.display = "none";
        document.getElementById("withdrawal").style.display = "block";
      }
      const tdsbtn = () => {
        document.getElementById("viewall").style.display = "none";
        document.getElementById("tds").style.display = "block";
      }
      const promotionsbtn = () => {
        document.getElementById("viewall").style.display = "none";
        document.getElementById("promotions").style.display = "block";
      }
      const invitebtn = () => {
        document.getElementById("viewall").style.display = "none";
        document.getElementById("invite").style.display = "block";
      }
      const refundsbtn = () => {
        document.getElementById("viewall").style.display = "none";
        document.getElementById("refunds").style.display = "block";
      }
      const unfairbtn = () => {
        document.getElementById("viewall").style.display = "none";
        document.getElementById("unfair").style.display = "block";
      }
      const responsiblebtn = () => {
        document.getElementById("viewall").style.display = "none";
        document.getElementById("responsible").style.display = "block";
      }
      const gameplaybtn = () => {
        document.getElementById("viewall").style.display = "none";
        document.getElementById("gameplay").style.display = "block";
      }
      const registrationbtn = () => {
        document.getElementById("viewall").style.display = "none";
        document.getElementById("registration").style.display = "block";
      }
      const eventsbtn = () => {
        document.getElementById("viewall").style.display = "none";
        document.getElementById("events").style.display = "block";
      }
      const navigationbtn = () => {
        document.getElementById("viewall").style.display = "none";
        document.getElementById("navigation").style.display = "block";
      }
      const tutorialbtn = () => {
        document.getElementById("viewall").style.display = "none";
        document.getElementById("tutorial").style.display = "block";
      }
      const legalitybtn = () => {
        document.getElementById("viewall").style.display = "none";
        document.getElementById("legality").style.display = "block";
      }
    
      
  return (
    <div>
      <Topheader title="Helpdesk" />
      <div className='grey-bg' id='helpdesk'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
           
              <div id="mainhome">
                <div id='faqva'>
                <div  className="d-flex justify-content-between my-3">
                  <div className=" fontw-700">Frequently Asked
                    Questions</div>
                  <div onClick={btnClick0} className="fontw-700">View All</div>
                </div>
                </div>

                <div className="accordion" id="accordionFaq">
                  {
                    faqdata.homepage.map(faqdata => {
                      return (
                        <div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" >
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${faqdata.id}`} aria-expanded="false" aria-controls={faqdata.id} dangerouslySetInnerHTML={{ __html: faqdata.question }}>
                              </button>
                            </h2>
                            <div id={faqdata.id} className="accordion-collapse collapse" >
                              <div className="accordion-body" dangerouslySetInnerHTML={{ __html: faqdata.ans }}>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>


                <div id='faqmi' className="my-3">
                  <div className="px-2 fontw-700">More Information </div>
                </div>

                <div className="accordion mb-5" id="accordionExample">

                  <div className="accordion-item">
                    <h2 className="accordion-header" >
                      <button onClick={btnClick1} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                        <span><img src="images/faq/legal-helpdesk.svg" />
                          Legal</span>
                      </button>
                    </h2>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button onClick={btnClick2} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                        <span><img src="images/faq/privacy-helpdesk.svg"
                        /> Privacy Policy</span>
                      </button>
                    </h2>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" >
                      <button onClick={btnClick3} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
                        <span><img src="images/faq/terms-helpdesk.svg"
                        /> Terms & Conditions</span>
                      </button>
                    </h2>
                  </div>
                </div>
              </div>

              <div id="legal" className='pt-3 hide-section' >
                <strong>
                  The Central legislation governing gaming in India is
                  the Public Gambling Act, 1867.
                </strong>
                <strong>
                  Is Poker Legal in
                  India?
                </strong>
                <p>
                  Section 12 of the Public Gambling Act, 1867 provides that games of
                  mere skill are exempt from the application of the Act. The Supreme Court of India and
                  various High Courts in India have opined that a game of mere skill is a game “in which,
                  although the element of chance necessarily cannot be entirely eliminated, success depends
                  principally upon the superior knowledge, training, attention, experience and adroitness of
                  the player. A game of skill is one in which the element of skill predominates over the
                  element of chance.” No penalty can be imposed upon a person for playing such games of skill.
                  <br /><br />
                  Poker is a game of skill since it requires the player to possess
                  psychological skills, knowledge of statistics & probability and strategizing skill. Bets are
                  placed based on calculated odds and predictable outcomes. The winner is determined by
                  probability and preponderance and not just luck. Even the International of Mind Sports
                  Association (IMSA) recognises poker as a ‘mind sport’.
                  <br /><br />
                  It may be noted that States are permitted, by the Indian
                  Constitution, to enact laws regulating betting and gambling in their respective
                  jurisdictions. In furtherance of these powers, various States have enacted anti- gambling
                  legislations. Such legislations are largely in concert with the Public Gambling Act of 1867
                  (and include the exception of “games of skill”). Where a State legislation on gambling
                  exists, it prevails over the Public Gambling Act of 1867.
                  <strong>
                    In this regard, the Assam
                    Game and Betting Act, 1970 and Odisha (Prevention of) Gambling Act, 1955 and Telangana
                    State Gaming (Amendment), and the Amendment to the Andhra Pradesh Gaming Act, 1974 and the
                    Ordinance and High Court Judgment in Gujarat, 2017 prohibits games with money stakes and
                    also does not create an exception for games of skill. Therefore, currently, residents of
                    Andhra Pradesh, Assam, Tamil Nadu,  Gujarat, Odisha and Telangana are not permitted to play on our
                    site.
                  </strong>
                  <br /><br />
                  Pursuant to an order of the Madras High Court dated August 3, 2021,
                  which has lifted the ban on online real money games, we are now allowing players from the
                  state of Tamil Nadu to come and play on PokerBaazi.

                </p>
              </div>

              <div id="privacyPolicy" className='pt-3 hide-section' >
                <div >
                  <h5 className="text-blue font-weight-bold pt32 mb-3">We keep our eye on the game, not you!
                  </h5>
                  <p className="pContent">Pokerbaazi.com is committed to respecting your privacy and complies with
                    the
                    prevailing data protection and privacy
                    laws. Pokerbaazi.com shall not provide, distribute, trade, sell or rent your name, e-mail
                    address or
                    other personal
                    information provided on the platform to any third party or information related to your usage
                    of the
                    Website, except as
                    provided in this Privacy Policy.
                  </p>
                  <h5 className="text-blue font-weight-bold pt-3 mb-3">Information Gathered</h5>
                  <p className="pContent">
                    To avail the facilities offered on www.Pokerbaazi.com, apart from your username, password
                    and email
                    id, you also have to provide certain additional information. You have the option of not
                    providing
                    such additional information asked by Pokerbaazi.com or to withdraw such additional
                    information or
                    data so provided ubsequently as per the Privacy Policy and the Terms of Use. <br /><br />
                    However,
                    if you wish to
                    not share such information or data initially or subsequently decide to withdraw the
                    information or
                    data so already shared, Pokerbaazi.com shall have the liberty to withhold access to
                    Pokerbaazi.com
                    and you shall not be entitled to raise any objection in this regard. Any withdrawal of the
                    consent
                    to share information or data shall be sent in writing to
                    <a>playerrelations@pokerbaazi.com</a>.
                  </p>
                  <h5 className="text-blue font-weight-bold pt-3 mb-3">How POKERBAAZI.COM Collects Information</h5>
                  <ul className="pContent pl-3">
                    <li>We collect personal information from visitors to this web site through the use of online
                      forms
                      and
                      every time you e-mail us your details.</li>
                    <li>We also collect information on the transactions you undertake, but not the details of
                      payment
                      cards used.</li>
                    <li>The personal information that we collect may include your name, email address, home
                      address,
                      telephone number, and date
                      of birth and other information collected on registration or through surveys which we, or
                      undertakings engaged by us for
                      such purpose, shall undertake.</li>
                    <li>When you visit www.Pokerbaazi.com, certain information may also be automatically
                      collected and
                      stored, including the IP
                      address of your computer, browser type and language, the date and the time during which
                      you
                      accessed the site and/or the
                      address of the website which you may have used to link to www.Pokerbaazi.com. [We do not
                      log
                      e-mail addresses of web
                      site visitors.]</li>
                    <li>When you visit www.Pokerbaazi.com, cookies may be stored in your computer. A cookie is a
                      small
                      text file that uniquely
                      identifies your browser. The cookies assigned by the servers of Pokerbaazi.com may be used
                      to
                      personalize your
                      experience on www.Pokerbaazi.com. Moreover, cookies may also be used for authentication,
                      game
                      management and security
                      purposes.</li>
                    <li>Cookies may also be assigned by the advertisers of Pokerbaazi.com when you click on any
                      of the
                      advertisements which may
                      be displayed on www.Pokerbaazi.com in which case such cookies are controlled by these
                      advertisers and not
                      Pokerbaazi.com.</li>
                  </ul>
                  <h5 className="text-blue font-weight-bold pt-3 mb-3">Usage of collected information:</h5>
                  <ol className="pl-3 pContent">
                    <li>Creating and managing player accounts and records.</li>
                    <li> Administering player accounts.</li>
                    <li> Providing and personalizing our services.</li>
                    <li> Dealing with your enquirers and requests.</li>
                    <li> Notifying you about updates to our software and/or services.</li>
                    <li> Ensuring we are able to fulfill our regulatory responsibilities by verifying the
                      accuracy of
                      any information you give us.</li>
                    <li> Audits and general regulatory compliance, crime prevention and prosecution of offenders
                      including, where appropriate, dealing with requests for information by authorized entities
                      for
                      the sharing of information.</li>
                    <li> Providing you with information about and support for products and services.</li>
                    <li> Marketing our services or products or those of other entities within our group of
                      companies.
                    </li>
                    <li> Supporting any of the intended purposes specifically stated at the time at which you
                      provided
                      the personal information.</li>
                    <li> Periodic analysis and survey of the traffic to Pokerbaazi.com for market research and
                      advertising purposes and to gather statistics, used for advertising and for determining
                      the
                      efficacy and popularity of Pokerbaazi.com. collectively, the “Purposes”.</li>
                  </ol>
                  <h5 className="text-blue font-weight-bold pt-3 mb-3">Terms of use of Collected information</h5>
                  <ul className="pl-3 pContent">
                    <li>When you register your email address with Pokerbaazi.com, you agree to receive email
                      communications from Pokerbaazi.com
                      entities specifically authorized by Pokerbaazi.com and other users.</li>
                    <li>You also agree and acknowledge that when you use our referral program, we will send
                      emails to
                      the referred person on
                      your behalf and the email headers will carry your email address as the address from which
                      such
                      emails are sent.</li>
                    <li>The data which is transmitted over the Internet is intrinsically exposed to security
                      risks or
                      threats. For instance,
                      information transmitted via chat or email can be compromised and used by others.
                      Therefore, we
                      cannot guarantee any
                      security for such information. We strongly recommend that players do not share any
                      financial
                      information or other
                      sensitive information with other players.</li>
                    <li>When you register with Pokerbaazi.com, your account is protected by means of login
                      information
                      which includes a username
                      and a password that is known only to you. Therefore, you are responsible for maintaining
                      the
                      confidentiality of your
                      login information including your username and password. PokerBaazi is not responsible for
                      any
                      activity which is
                      undertaken when your password is used. We advise you not to disclose your password to
                      anyone. If
                      you are aware of or
                      reasonably suspect any breach of security, including compromise of your login information,
                      it is
                      your responsibility to
                      immediately notify Pokerbaazi.com.</li>
                    <li>We may contain links to other websites. Such websites are governed by their own privacy
                      policies
                      and PokerBaazi.com does
                      not exercise any control over them. It is your responsibility to read and understand the
                      privacy
                      policy of such websites
                      when you follow a link outside <a href="/."
                        className="blue font-weight-bold">https://www.pokerbaazi.com</a>
                    </li>
                  </ul>
                  <h5 className="text-blue font-weight-bold pt-3 mb-3">Disclosure Of Information</h5>
                  <ol className="pl-3 pContent">
                    <li>Any companies within our group and to their employees who require such information.</li>
                    <li>Any third parties service providers who enable us to improve your gaming experience,
                      including
                      payment processors and
                      data verifiers.</li>
                    <li>Any third parties operations service providers.</li>
                    <li>Any auditors, contractors or other advisers auditing the books or those who need to
                      access such
                      information for the
                      purpose of advising us.</li>
                    <li>Third-party market research and advertising companies or firms.</li>
                    <li>ny regulatory body or law enforcement authority that may have any reasonable requirement to access such personal information.</li>
                    <li>Any potential purchasers or investors.</li>
                    <li>All communication with PokerBaazi personnel, including calls, will be recorded for compliance requirements whenever needed.</li>

                  </ol>
                  <p className="pContent pt-3">Additionally, PokerBaazi may share personally identifiable
                    information if
                    sharing of such information is necessary to
                    comply with legal processes or governmental request, or to enforce the Terms of Use and this
                    Privacy Policy, or for
                    prevention of fraud, or for issues involving information security, or to protect your rights
                    or
                    the rights of
                    PokerBaazi.com or the rights of the general public.</p>
                  <h5 className="text-blue font-weight-bold pt-3 mb-3">Security</h5>
                  <p className="pContent">We have implemented stringent security policies, rules and technical
                    measures to
                    protect and safeguard all the
                    information you provide us. Ensuring the information is under our control from unauthorized
                    access, improper use or
                    disclosure, unauthorized modification, unlawful destruction or accidental loss. All
                    employees
                    and data processors who
                    have access to, and are associated with the processing of this information, are obliged to
                    respect your privacy. Our
                    platform uses the best available means to maintain data privacy and to protect your
                    information
                    from being lost or
                    misused.</p>
                  <h5 className="text-blue font-weight-bold pt-3 mb-3">Mergers and Other Events Requiring Transfer
                  </h5>
                  <p className="pContent">If we should ever file for bankruptcy, or be deemed insolvent, or be
                    acquired by
                    a third party or merge with a third
                    party or sell all or part of our assets or transfer substantially all or part of our
                    relevant
                    assets to a third party,
                    we are entitled to share personal and all other information gathered through our services to
                    potential stakeholders.</p>
                  <h5 className="text-blue font-weight-bold pt-3 mb-3">Protection of Children</h5>
                  <p className="pContent">The services provided by Pokerbaazi.com are not intended for or directed
                    to
                    minors. All players are mandated to provide
                    documentation for their age proof, indicating their age is of legal consent in their
                    jurisdiction. We reserve the right
                    to access and verify any personal information submitted by or collected from you. In the
                    unfortunate event of finding
                    any data discrepancies related to age, the platform reserves the rights to deactivate the
                    player
                    profile and eliminate
                    the information from our records.</p>
                  <h5 className="text-blue font-weight-bold pt-3 mb-3">Winnings</h5>
                  <p className="pContent">Winnings and cash-outs are kept strictly confidential. All this
                    information is
                    stored in a secure operating environment.
                    The only caveat surpassing the confidentiality policy is the requirement of the information
                    by
                    law, regulation or any
                    government or competent regulatory authority.</p>
                  <h5 className="text-blue font-weight-bold pt-3 mb-3">Consent</h5>
                  <p className="pContent">By using our website, it is understood that you have given your consent to
                    the
                    collection and use of information
                    provided by you to Pokerbaazi.com and its partners and affiliates.
                  </p>
                  <p className="pContent pt-3">In order to play real money games, you will be required to send money
                    to
                    and receive money from us. We may use
                    third-party electronic payment processors and/or financial institutions ('ESPs') to process
                    such
                    financial transactions.
                    By accepting this Privacy Policy, you express your consent to disclose personal information
                    necessary for the processing
                    of transactions being shared with ESPs. We take steps to ensure that our liaison with ESPs
                    protects your privacy.</p>
                  <p className="pContent pt-3">We reserve the right to conduct a security review at any time to
                    validate
                    your identity, age, the registration data
                    provided by you and to verify your use of the services and your financial transactions for
                    potential breach of our Terms
                    and Conditions of use and of applicable law. By using our website, you authorize us, our
                    employees, agents and suppliers
                    to use your personal information and to disclose your personal information to third parties
                    for
                    the purposes of
                    validating the information you provide to us.</p>
                  <p className="pContent pt-3">By filling your mobile number on our site, you are giving Baazi
                    Networks
                    Private Limited the right to contact you by
                    Call/SMS to provide you information on all promotional activity/events conducted by
                    Pokerbaazi.com and its partners.
                    Your mobile number will not be used for any third party communication whatsoever.</p>
                  <p className="pContent pt-3">We have provided this Privacy Policy to help you understand how we
                    collect,
                    use and safeguard your information for the
                    purpose of offering you gambling services. For any further queries, reach out to us at <a
                      className="blue font-weight-bold">info@pokerbaazi.com</a>.</p>
                  <p className="pContent py-3">This privacy policy forms a part of the Website Terms.</p>
                </div>
              </div>

              <div id='terms' className="mt-3 hide-section">
                <div>
                  <ul className="nav nav-pills justify-content-center bg-transparent" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" data-bs-toggle="pill" href="#terms1">Terms of use</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-bs-toggle="pill" href="#terms2">Affiliate Policy</a>
                    </li>
                  </ul>


                  <div className="tab-content">
                    <div id="terms1" className="container tab-pane active"><br />


                      <h5 className="text-blue font-weight-bold" >
                        BEFORE REGISTERING WITH US, YOU SHOULD CAREFULLY READ THE TERMS
                        PROVIDED ON THE WEBSITE WHICH Is APPLICABLE TO ALL SERVICES ON THE
                        WEBSITE AND ALSO THE PRODUCT-SPECIFIC CONDITIONS AND RULES
                        APPLICABLE TO SPECIFIC OFFERINGS.
                      </h5>
                      <p className="text-justify pContent">
                        Links to the following sections of these Terms are provided below
                        for easy access to the sections you intend to refer to. However, you
                        should read all Terms as you will be bound by them all upon any use
                        of any section of this Website. Click on any of the following links
                        to use that section directly.<br /><br />These terms of use are an
                        agreement between the Company and you/user, which terms are defined
                        herein below. The agreement must be read by you (user) completely
                        and well understood before you agree to the terms of use governing
                        any and all relationships in this agreement. The user should read,
                        understand and agree to the terms of use which includes those terms
                        and conditions expressly set out below and those incorporated by
                        reference, which you can access by clicking on the relevant link.
                      </p>
                      <h5 className="text-blue font-weight-bold pt-3 mb-3">
                        DEFINITIONS AND GETTING STARTED
                      </h5>
                      <ul className="text-justify pContent pl-3">
                        <li>
                          M/s Baazi Networks Private Limited and all its subsidiaries, from
                          here on called the 'company' (the company could also be referred
                          to as 'we', 'us', 'our' and other such adjectives).
                        </li>
                        <li>
                          Company’s website www.pokerbaazi.com, from here on is referred to
                          as the 'website'.
                        </li>
                        <li>
                          ‘You’ shall mean the person using the Website and/or the products
                          and services offered by the Company on the Website, from here on
                          will be referred as 'you', 'your', 'user' or 'player'.
                        </li>
                        <li>
                          The terms of services, products or information and their usage set
                          out herein and those incorporated herein by reference, shall from
                          here on be collectively referred to as 'Terms and conditions'.
                        </li>
                        <li>
                          ‘Rake’ shall mean a percentage of the pot money placed by you/user
                          that is deducted by the Company as fee towards use of the products
                          and services offered on the Website. The percentage deducted shall
                          vary based on the amount of money placed by a player in the pot.
                          Such percentage shall be determined at the sole discretion of the
                          Company.
                        </li>
                        <li>
                          ‘Rake back’ shall mean a percentage of the Rake given to an
                          Affiliate/user as an incentive.
                        </li>
                        <li>
                          Effective 23rd June 2022, every new sign-up will get a default system-generated username.
                          Players can change their default username to a username of their choice only once.
                        </li>
                        <li>
                          PokerBaazi holds the rights to showcase players’ mucked hands for content creation which
                          can be used on various multimedia channels.
                        </li>
                      </ul>
                      <h5 className="text-blue font-weight-bold pt-3 mb-2">Rake Structure</h5>
                      <p className="text-justify pContent">
                        Rake is the commission fee charged by an online poker platform
                        operating cash games.
                      </p>
                      <p className="text-justify pContent">
                        <a className="common-txthigh" href="https://www.pokerbaazi.com/rake-structure"
                          target="_blank">Click here</a>
                        to check the Rake Structure.
                      </p>
                      <h5 className="text-blue font-weight-bold pt-3 mb-3">
                        DEFINITION OF THE TERMS 'MEMBERSHIP'
                      </h5>
                      <p className="text-justify pContent">
                        The Website and its membership are strictly restricted to one user
                        only and in no way should be considered to be a multi-user
                        account/membership . In the event the user is a proprietorship
                        concern, such user shall ensure that the name given to obtain
                        membership shall be the same as the name on the PAN card used for
                        using the products/services on the Website. In order to gain
                        membership to the website enabling the user to play the games
                        offered/ use the software or any other product or services offered
                        by the website, company or its associates, they will have to first
                        register themselves with the website by providing their current and
                        valid credentials. You hereby undertake to provide all valid
                        credentials and represent and warrant to the Company that you shall
                        not share these credentials/account details with any other person
                        and in such event, you shall keep the Company and its affiliates
                        fully indemnified from any damage/injury resulting therefrom.
                      </p>
                      <p className="text-justify pContent pt-3">
                        Mere registration by the user does not guarantee membership., Only
                        after the Company or its representatives deem fit by their own
                        subjective judgment will they grant membership informing you of the
                        same by sending you an e- mail. The right to grant membership is
                        completely reserved by the Company/website and its representatives.
                        Such membership can be terminated by giving instant notice for any
                        reason that Company deems fit and by agreeing to the terms of use,
                        the user grants his/her/its consent for the same. The server where
                        the software is installed and the games hosted will be placed in a
                        strictly non-public / confidential area where the access to the
                        server is completely restricted both physically and virtually. Any
                        person/persons or group that will be authorized to access the server
                        where the games are held are not allowed to register themselves as
                        users, thus, not allowed to become members. Such people are not
                        allowed to use the software/play games or use any other product or
                        service provided by the company. This is in the interests of
                        promoting fair play.
                      </p>
                      <h5 className="text-blue font-weight-bold pt-3 mb-3">
                        SERVICES NOT OFFERED BELOW THE AGE OF 18
                      </h5>
                      <p className="text-justify pContent">
                        Our services and products are not available to anybody under the age
                        of 18 on the day of them applying for membership through the
                        registration process on the site. Also, it is strictly prohibited
                        for any user under the age of 18 to play games on our website. We
                        reserve the right to request proof of age at any stage to verify
                        that the declaration of age provided by you at the time of
                        registration is genuine and we may prohibit usage of the Website to
                        a person if proof of age is not provided upon request or if the
                        Company suspects that a person using the service is under-age. The
                        services and products are not intended for users connecting to the
                        site from jurisdictions that say it is illegal to do so (as listed
                        under ‘Legality’).
                      </p>
                      <h5 className="text-blue font-weight-bold pt-3 mb-3">TDS POLICY</h5>
                      <p className="text-justify pContent">
                        Click <a className="common-txthigh" href="https://www.pokerbaazi.com/tds-policy">here</a> to
                        check
                        the TDS policy.
                      </p>
                      <h5 className="text-blue font-weight-bold pt-5 mb-3">
                        SERVICES NOT OFFERED IN STATES OF ANDHRA PRADESH, Assam, Tamil Nadu,  GUJARAT,
                        ODISHA AND TELANGANA
                      </h5>
                      <p className="text-justify pContent">
                        The applicable laws in the state of Andhra Pradesh, Assam, Tamil Nadu,  Gujarat,
                        Odisha and Telangana may prohibit a player from using
                        the services offered on our website. There may be applicable
                        penalties imposed on such a user by the respective state governments
                        or the central government of India as the case may be. Our company
                        and its website do not accept membership requests from people who
                        are residing in these states and if a user residing in such state
                        becomes a member of the site by giving false information, the
                        liability will be solely on the user and the company reserves the
                        right to terminate the user's membership without any notice and
                        confiscate all his deposit and winnings as the case might be. If we
                        find a player playing on PokerBaazi app or website, has an IP
                        address of any restricted state(s), or if a deposit or withdrawal is
                        initiated through an IP address of any banned state, such users
                        account(s) will be terminated with immediate effect and the funds in
                        the account will be confiscated. Such user shall keep the Company,
                        its affiliates, officers, representatives and agents fully
                        indemnified from such misrepresentation. You accept that Baazi
                        Networks Private Limited will not be liable to take any
                        responsibility for the breach of the user of applicable state laws.
                        Users from all states have to always ensure that they are following
                        the applicable state laws and we will try to post any changes that
                        we deem appropriate to better educate the users. Our decision in
                        this regard will be final and no consideration whatsoever will be
                        extended to the user.
                      </p>
                      <h5 className="text-blue font-weight-bold pt-3 mb-3">
                        SERVICES NOT OFFERED OUTSIDE THE COUNTRY
                      </h5>
                      <p className="text-justify pContent">
                        You confirm that you are not accessing the Services to play cash
                        games from outside India. If an user residing outside India becomes
                        a member of the site by giving false information, the liability will
                        be solely on the user and the company reserves the right to
                        terminate the user's membership without any notice and confiscate
                        all his deposit and winnings as the case might be. Such users shall
                        keep the Company, its affiliates, officers, representatives and
                        agents fully indemnified from such misrepresentation.
                      </p>
                      <h5 className="text-blue font-weight-bold pt-3 mb-3">
                        ACCOUNT CREATION AND MAINTAINANCE
                      </h5>
                      <p className="text-justify pContent">
                        You may only have one account on our website from here on referred
                        to as 'Account', for which you will register using your own, correct
                        name with valid credentials and declaration of age, as sought at the
                        time of registration. You may not share your account with any other
                        person nor use the service by means of another person's account.
                        Should you attempt to open more than one account, under your own
                        name or under any other name, or should you attempt to use the
                        service by means of any other person's account, we will be entitled
                        to close all Your Accounts and bar you from using the
                        products/services on our Website with immediate effect. You should
                        ensure that you have read and understood the rules and regulations
                        of the games available through the service, here on referred to as
                        the 'Games'. You agree to abide by the rules and regulations of each
                        of the Games as published and periodically changed on the Website.
                        You agree to keep yourself updated in respect of the rules and
                        regulations, which are subject to change from time to time, at the
                        sole discretion of the Company. The rules that govern the games,
                        products and services offered by the website form part of the terms
                        and conditions and they will be available under the 'About Game' or
                        similar section on the website. However, if any rules are not
                        explicitly mentioned on the website,The user is encouraged to seek
                        clarification by using the customer support services offered. The
                        interpretation/decision of the company and/or its website will be
                        final and you agree to abide by them by accepting the terms and
                        conditions.
                      </p>
                      <h5 className="text-blue font-weight-bold pt-3 mb-3">
                        Sharing of password and other player responsibilities
                      </h5>
                      <p className="text-justify pContent">
                        Sharing or distribution of the password with any other user/ person/
                        group or any third party is strictly prohibited. PokerBaazi.com is
                        not responsible if your account is accessed or opened by others
                        using your password. You are held legally responsible and liable for
                        all of your activities on the website made from your Account,
                        whether or not made by you.
                      </p>
                      <h5 className="text-blue font-weight-bold pt-3 mb-3">
                        OTHER TERMS AND CONDITIONS
                      </h5>
                      <p className="text-justify pContent">
                        The players admit that they may be exposed to content posted by
                        other users, which they may find offensive, obnoxious or indecent
                        and that the website may not be able to prevent such content being
                        posted and you agree that you shall not hold the Company/Website
                        liable or responsible for such content in any manner. Such content
                        should be brought to the notice of the website/Company. The website
                        shall act upon the information as it deems acceptable. The decision
                        taken by the management of the company or the website in this regard
                        shall be final and binding on the player and the player specifically
                        agrees that www.pokerbaazi.com will not incur any liability under
                        any circumstance whatsoever regarding the same. You understand that
                        it is your obligation to protect the information you have provided
                        on the website including, but not limited, to usernames, passwords,
                        email addresses, contact details, and telephone numbers.<br /><br />
                        All deposits and withdrawals made by players are maintained in an
                        Escrow Account by the Company. This account holds and dispatches
                        funds to players as and when withdrawal requests are placed. Only
                        the amount generated via Rake is transferred from this Escrow
                        Account to a separate account of the Company (which is maintained by
                        the Company for receiving the Rake). Such transfers shall happen
                        once every 15 days. <br /><br />
                        You explicitly understand and agree that we will not incur any
                        liability for information provided by you to anyone which may result
                        in your account on the website being exposed or misused by any other
                        person or any other harm or loss being suffered by you. You are
                        accountable to obey any applicable law, while taking part in any
                        competition or tournament organized through the website. You
                        undertake and agree to assure us against any claims, expenses or
                        liabilities suffered by or claimed against us by any person or
                        entity arising out of your non-compliance with any applicable laws
                        and/or resulting from any activity through your Account.<br /><br />
                        You also understand and accept that your mere participation in a
                        game/ tournament available on the website does not create any
                        obligation on us to give you a prize. Your winning a prize is
                        entirely dependent on your skill as a player same as other players
                        in the game/tournament and subject to the rules of the game/
                        tournament. You acknowledge that your participation in any
                        game/tournament available on the website is purely voluntary and is
                        at your sole discretion and risk.<br /><br />
                        The user is required to note that Baazi Networks Pvt. Ltd. (or
                        related entities) may, at its sole discretion, provide
                        bonus/discounts (or Bonus Cash) or loyalty bonus or any other
                        bonus/discount through various promotional programmes &amp; business
                        promotion strategies for games/tournaments/contests on its
                        website/platform and the users shall not claim such bonus/discounts
                        (or Bonus Cash) or loyalty bonus or any other bonus/discount as a
                        matter of right from Baazi Networks Pvt. Ltd. (or related
                        entities).<br /><br />
                        You understand and acknowledge that once a game/tournament has
                        commenced, not being able to play due to slow internet connections,
                        faulty hardware, internet connection failure, low computer
                        configuration or for some other reason are not attributable to us
                        and the same do not entitle you to refund of the entry fee you may
                        have paid for participation. You agree, understand and acknowledge
                        that you will use your account to us solely for the purpose of
                        playing on the website and for any other transactions with us which
                        you may have to carry out with respect to your usage of the
                        products/services offered on the Website. You agree not to post any
                        offensive, obnoxious, indecent or unsolicited content on the Website
                        including but not limited to any advertisement, promotional
                        material, your personal information or such other details. In the
                        event of such posting, you shall keep the Company/Website
                        indemnified from and against all direct and indirect damage/loss
                        resulting therefrom. <br /><br />
                        You understand and acknowledge the fact that we are neither a bank
                        nor a financial institution and that the purchases/balance standing
                        to the credit in your account do not accumulate any interest. You
                        also understand and agree that the account with respect to your
                        Account maintained by us is purely for the purpose of payment of the
                        entry/ subscription fee to participate in games/tournaments made
                        available on the website and for purchase of cash prizes that you
                        may win. You also agree that you are required to furnish your PAN
                        (Permanent Account Number) duly issued to you by the Income Tax
                        Department, Government of India, as the case may be, to deduct TDS
                        as per the rules and regulations of the government of India. You
                        acknowledge that you are making use of the services knowing that you
                        may face a risk of monetary loss when using the services and that
                        www.pokerbaazi.com shall have no responsibility to you for any such
                        loss that arises in the course of your participation in the services
                        or use of the products offered on the Website. You understand that
                        your victory in any game is purely based on your skill.<br /><br />
                        You may not impersonate another person or user, attempt to get a
                        password, other account information, or other private information
                        from a user, or harvest email addresses or other information. In the
                        event, we have reasonable grounds to believe that your activities
                        include any of the acts specified above, We may initiate appropriate
                        legal proceedings against you as well as notifying the relevant
                        regulatory or law enforcement authorities where appropriate, apart
                        from suspending or terminating your privileges for the use of the
                        website. You may not purchase, sell, trade, rent, lease, license,
                        grant a security interest in, or transfer your user account, any
                        content, currency, points, standings, rankings, ratings, rakings or
                        any other attributes appearing in, originating from or associated
                        with the Website or by using any Services.
                      </p>
                      <div className="text-justify pContent pt-3">
                        <h5 className="text-blue font-weight-bold pt-2 mb-3">
                          Unfair Gameplay:
                        </h5>
                        <ol className="text-justify pContent pl-3">
                          <li>
                            We, at PokerBaazi, will always consider the best interests and
                            fairness of the game. Game manipulation/Unfair Gameplay shall
                            not be tolerated, and we shall take all suitable measures and/or
                            actions against Users/accounts engaging in such game
                            manipulation or illegal activity or unfair gameplay.
                          </li>
                          <li>
                            Cases of any game manipulation or unfair gameplay or illegal
                            activities including but not limited to chip dumping, collusion,
                            soft play, chat abuse, misuse of chat for discussing hands,
                            multiple accounts, use of EPA Programs, use of BOTS etc. shall
                            be strictly dealt with by us in the following manner:
                            <ol type="A">
                              <li>
                                <b className="text-blue">CHIP DUMPING</b>
                                <ol type="i">
                                  <li>
                                    Chip-dumping occurs when any PokerBaazi User/Player
                                    intentionally loses a hand in order to deliberately
                                    transfer his/her Chips to any other User/Player.
                                  </li>
                                  <li>
                                    We consider the illegal activity of Chip dumping as a
                                    material breach of these Terms of Use and Service and
                                    accordingly we shall have the right to take appropriate
                                    action against the Users/Players, involved in illegal
                                    activity of Chip dumping, as we deem fit on case to case
                                    basis.
                                  </li>
                                  <li>
                                    In the event we, at PokerBaazi, find that the
                                    User/Player is involved in such illegal and unfair
                                    activity of Chip Dumping in any way possible on
                                    PokerBaazi, we shall be entitled to take any of the
                                    actions as we deem fit on a case to case basis,
                                    including but not limited to:
                                    <ol type="a">
                                      <li>
                                        Penalty funds/amount/chips/bonus deduction from
                                        PokerBaazi account of Users/Players involved in
                                        illegal activity of Chip Dumping.
                                      </li>
                                      <li>
                                        Ejecting them from all cash tables and not allowing
                                        them to continue in any running tournament that they
                                        are playing or are registered in any tournaments in
                                        the future on PokerBaazi.
                                      </li>
                                      <li>
                                        Immediately blocking access to PokerBaazi of all the
                                        Users/Players involved in illegal activity of Chip
                                        Dumping including but not limited to ejecting them
                                        from all cash tables and not allowing them to
                                        continue in any running tournament that they are
                                        playing and/or are registered in any tournaments in
                                        future on PokerBaazi.
                                      </li>
                                      <li>
                                        Seizing all funds/amount/chips/bonus from PokerBaazi
                                        accounts of all the Users/Players involved in
                                        illegal activity of Chip Dumping.
                                      </li>
                                      <li>
                                        Termination/closure of PokerBaazi Account of all the
                                        Users/Players involved in illegal activity of Chip
                                        Dumping.
                                      </li>
                                      <li>
                                        Taking appropriate legal action against all the
                                        User/Player (involved in illegal activity of Chip
                                        Dumping) under applicable law in the jurisdiction.
                                      </li>
                                    </ol>
                                  </li>
                                </ol>
                              </li>
                              <li>
                                <b className="text-blue">COLLUSION</b>
                                <ol type="i">
                                  <li>
                                    Any User/Player found to be intentionally doing soft
                                    play against his/her opponent or knowing other
                                    User’s/Player’s card even before the particular hand
                                    goes to showdown or users/players working together with
                                    each other with the intention to extract money from
                                    other Users/Players is accounted for collusion.
                                  </li>
                                  <li>
                                    Collusion between Users/players by sharing hole cards or
                                    by any other methods is strictly forbidden. We reserve
                                    the right, in addition to other measures, to restrict
                                    seating and/or to prohibit Users/players from playing at
                                    a particular table or in a tournament, including
                                    restricting two or more Users/Players from playing
                                    together at the same table or in the same tournament.
                                  </li>
                                  <li>
                                    When the User/Player agrees to the Terms of Use and
                                    Service of PokerBaazi, he/she agrees that he/she shall
                                    not play any game in partnership or by communicating
                                    with other Users/Players which may give benefit to
                                    him/her over other Users/Players. We consider any
                                    collusion between Users/Players as a material breach of
                                    these Terms of Use and Service and accordingly we shall
                                    have the right to take appropriate action against the
                                    Users/Players, involved in illegal activity of
                                    Collusion, as we deem fit on case to case basis.
                                  </li>
                                  <li>
                                    In the event we, at PokerBaazi, find that the
                                    User/Player is involved in such illegal and unfair
                                    activity of Collusion in any way possible on PokerBaazi,
                                    we shall be entitled to take any of the actions as we
                                    deem fit on a case to case basis, including but not
                                    limited to:
                                    <ol type="a">
                                      <li>
                                        Penalty funds/amount/chips/bonus deduction from
                                        PokerBaazi account of Users/Players involved in
                                        illegal activity of Collusion.
                                      </li>
                                      <li>
                                        Immediately blocking access to PokerBaazi of all the
                                        Users/Players involved in illegal activity of
                                        Collusion including but not limited to ejecting them
                                        from all cash tables and not allowing them to
                                        continue in any running tournament that they are
                                        playing and/or are registered in any tournaments in
                                        future on PokerBaazi.
                                      </li>
                                      <li>
                                        Seizing all funds/amount/chips/bonus from PokerBaazi
                                        accounts of all the Users/Players involved in
                                        illegal activity of Collusion.
                                      </li>
                                      <li>
                                        Termination/closure of PokerBaazi Account of all the
                                        Users/Players involved in illegal activity of
                                        Collusion.
                                      </li>
                                      <li>
                                        Taking appropriate legal action against all the
                                        User/Player (involved in illegal activity of
                                        Collusion) under applicable law in the jurisdiction.
                                      </li>
                                    </ol>
                                  </li>
                                </ol>
                              </li>
                              <li>
                                <b className="text-blue">MULTIPLE USER/PLAYER ACCOUNTS</b>
                                <ol type="i">
                                  <li>
                                    It is prohibited for a User/player to open multiple
                                    PokerBaazi Accounts. A User/ Player may only have one
                                    PokerBaazi Account and shall only use PokerBaazi using
                                    such single account A User/Player is also prohibited
                                    from creating any User/Player account on PokerBaazi in
                                    his/her family member’s and/or friend’s and/or
                                    relatives’ name and/or playing ‘games of skill’ from any
                                    other User/Player account (including but not limited to
                                    family or friends or relatives’ accounts) on PokerBaazi.
                                    Further, a User/Player shall be strictly prohibited from
                                    allowing any other person to access his/her User account
                                    for playing ‘games of skill’ on PokerBaazi.
                                    Users/Players shall be strictly restricted or prohibited
                                    from using any User/Player account on a sharing basis on
                                    PokerBaazi. (“<b>Multiple Accounts</b>”)
                                  </li>
                                  <li>
                                    We consider Multiple Accounts of a User/Player as a
                                    material breach of these Terms of Use and Service and
                                    accordingly we shall have the right to take appropriate
                                    action against the User/Player, involved in such illegal
                                    activity of Multiple Accounts (Multiple User/Player
                                    Accounts) on PokerBaazi, as we deem fit on case to case
                                    basis.
                                  </li>
                                  <li>
                                    In the event, that we, at PokerBaazi, become aware of
                                    additional accounts (Multiple Accounts) opened by a
                                    User/Player, we shall be entitled to take any of the
                                    actions as we deem fit on a case to case basis,
                                    including but not limited to:
                                    <ol type="a">
                                      <li>
                                        Penalty funds/amount/chips/bonus deduction from
                                        User’s/Player’s PokerBaazi account, the penalty
                                        amount to be decided by PokerBaazi at its sole
                                        discretion.
                                      </li>
                                      <li>
                                        Immediately blocking User’s/Player’s access to
                                        PokerBaazi including but not limited to ejecting
                                        them from all cash tables and not allowing them to
                                        continue in any running tournament that they are
                                        playing and/or are registered in any tournaments in
                                        future on PokerBaazi.
                                      </li>
                                      <li>
                                        Seizing all funds/amount/chips/bonus held in all
                                        PokerBaazi accounts of the User/Player.
                                      </li>
                                      <li>
                                        Termination/closure of all PokerBaazi accounts of
                                        the User/Player.
                                      </li>
                                      <li>
                                        Taking appropriate legal action against a
                                        User/Player (involved in illegal activity of having
                                        Multiple Accounts on PokerBaazi) under applicable
                                        law in the jurisdiction.
                                      </li>
                                    </ol>
                                  </li>
                                </ol>
                              </li>
                              <li>
                                <b className="text-blue">IP GHOSTING</b>
                                <ol type="i">
                                  <li>
                                    User/player, during the gameplay on PokerBaazi, shall
                                    not and/or attempt to change the Internet Protocol (IP)
                                    Address and/or Geo-location multiple times without
                                    written authorization from PokerBaazi (“<b>IP Ghosting</b>”).
                                  </li>
                                  <li>
                                    We consider illegal activity of IP Ghosting by a
                                    User/Player as a material breach of these Terms of Use
                                    and Service and accordingly we shall have the right to
                                    take appropriate action against the User/Player,
                                    involved in such illegal activity of IP Ghosting on
                                    PokerBaazi, as we deem fit on case to case basis.
                                  </li>
                                  <li>
                                    In the event we, at PokerBaazi, find that the
                                    User/Player is involved in such IP Ghosting and/or
                                    change of Geo-location during gameplay on PokerBaazi, we
                                    shall be entitled to take any of the actions as we deem
                                    fit on a case to case basis, including but not limited
                                    to:
                                    <ol type="a">
                                      <li>
                                        Penalty funds/amount/chips/bonus deduction from
                                        User’s/Player’s PokerBaazi account.
                                      </li>
                                      <li>
                                        Immediately blocking a User’s/Player’s access to
                                        PokerBaazi including but not limited to ejecting
                                        them from all cash tables and not allowing them to
                                        continue in any running tournament that they are
                                        playing and/or are registered in any tournaments in
                                        future on PokerBaazi.
                                      </li>
                                      <li>
                                        Seizing all funds/amount/chips/bonus held in the
                                        User's/Player’s account.
                                      </li>
                                      <li>
                                        Termination/closure of User's/Player’s PokerBaazi
                                        Account.
                                      </li>
                                      <li>
                                        Taking appropriate legal action against a
                                        User/Player (involved in illegal activity of IP
                                        Ghosting) under applicable law in the jurisdiction.
                                      </li>
                                    </ol>
                                  </li>
                                </ol>
                              </li>
                              <li>
                                <b className="text-blue">SOFTWARE MODIFICATIONS</b>
                                <ol type="i">
                                  <li>
                                    User/Player shall not and/or attempt to modify,
                                    decompile, reverse-engineer or disassemble the
                                    PokerBaazi Software in any way.
                                  </li>
                                  <li>
                                    We consider illegal activity of software modification by
                                    a User/Player as a material breach of these Terms of Use
                                    and Service and accordingly we shall have the right to
                                    take appropriate action against the User/Player,
                                    involved in such illegal activity of software
                                    modification on PokerBaazi, as we deem fit on case to
                                    case basis.
                                  </li>
                                  <li>
                                    In the event we, at PokerBaazi, find that the
                                    User/Player is involved in such software modification or
                                    has attempted to modify the PokerBaazi software in any
                                    way possible, we shall be entitled to take any of the
                                    actions as we deem fit on a case to case basis,
                                    including but not limited to:
                                    <ol type="a">
                                      <li>
                                        Penalty funds/amount/chips/bonus deduction from
                                        User’s/Player’s PokerBaazi account.
                                      </li>
                                      <li>
                                        Immediately blocking a User’s/Player’s access to
                                        PokerBaazi including but not limited to ejecting
                                        them from all cash tables and not allowing them to
                                        continue in any running tournament that they are
                                        playing and/or are registered in any tournaments in
                                        future on PokerBaazi.
                                      </li>
                                      <li>
                                        Seizing all funds/amount/chips/bonus held in the
                                        User's/Player’s account.
                                      </li>
                                      <li>
                                        Termination/closure of a User's/Player’s PokerBaazi
                                        Account.
                                      </li>
                                      <li>
                                        Taking appropriate legal action against a
                                        User/Player (involved in illegal activity of
                                        software modification) under applicable law in the
                                        jurisdiction.
                                      </li>
                                    </ol>
                                  </li>
                                </ol>
                              </li>
                              <li>
                                <b className="text-blue">EXTERNAL PLAYER ASSISTANCE PROGRAMS AND BOTS</b>
                                <ol type="i">
                                  <li>
                                    The use of artificial intelligence including, without
                                    limitation, "robots" is strictly forbidden on
                                    PokerBaazi. All actions taken in relation to PokerBaazi
                                    by a User/player must be executed personally by
                                    Users/Players through the User/Player interface
                                    accessible by use of the PokerBaazi Software.
                                  </li>
                                  <li>
                                    We prohibit those External Player Assistance Programs
                                    which are designed to provide an "Unfair Advantage" to
                                    Users/Players. We define "External" to mean computer
                                    software (other than the PokerBaazi Software), and
                                    non-software-based databases or profiles. We define an
                                    "Unfair Advantage" as any instance in which a
                                    User/Player accesses or compiles information on other
                                    Users/Players beyond that which the User/Player has
                                    personally observed through the User's/Player’s own game
                                    play.
                                  </li>
                                  <li>
                                    The User/Player agrees that we, at PokerBaazi, may take
                                    steps to detect and prevent the use of prohibited
                                    External Player Assistance (EPA) Programs. These steps
                                    may include, but are not limited to, examination of
                                    software programs running concurrently with our
                                    PokerBaazi Software on the User's PC or Device. The
                                    User/Player agrees that he/she will not attempt to
                                    bypass, interfere with, or block such steps, including,
                                    without limitation, the use of third-party software that
                                    bypasses, interferes with, or blocks such steps.
                                  </li>
                                  <li>
                                    We consider this illegal activity of using EPA Programs
                                    and BOTS as a material breach of these Terms of Use and
                                    Service and accordingly we shall have the right to take
                                    appropriate action against the User/Player, involved in
                                    such illegal activity of using EPA Programs and BOTS on
                                    PokerBaazi, as we deem fit on case to case basis.
                                  </li>
                                  <li>
                                    In the event we, at PokerBaazi, find that the
                                    User/Player is involved in such illegal activity of EPA
                                    Programs and/or use of BOTS, we shall be entitled to
                                    take any of the actions as we deem fit on a case to case
                                    basis, including but not limited to:
                                    <ol type="a">
                                      <li>
                                        Penalty funds/amount/chips/bonus deduction from
                                        User’s/Player’s PokerBaazi account.
                                      </li>
                                      <li>
                                        Immediately blocking a User’s/Player’s access to
                                        PokerBaazi including but not limited to ejecting
                                        them from all cash tables and not allowing them to
                                        continue in any running tournament that they are
                                        playing and/or are registered in any tournaments in
                                        future on PokerBaazi.
                                      </li>
                                      <li>
                                        Seizing all funds/amount/chips/bonus held in the
                                        User's/Player’s account.
                                      </li>
                                      <li>
                                        Termination/closure of a User's/Player’s PokerBaazi
                                        Account.
                                      </li>
                                      <li>
                                        Taking appropriate legal action against a
                                        User/Player under applicable law in the
                                        jurisdiction.
                                      </li>
                                    </ol>
                                  </li>
                                </ol>
                              </li>
                              <li>
                                <b className="text-blue">OFFENSIVE LANGUAGE OR CONTENT</b>
                                <ol type="i">
                                  <li>
                                    The User/Player is prohibited from posting any unlawful,
                                    indecent,religious, racist, obscene, libellous, defamatory or
                                    threatening material or any material that would violate
                                    any applicable law or generally be considered to be
                                    offensive, via PokerBaazi whether using the chat
                                    function, or in correspondence/conversation with our
                                    PokerBaazi personnel.
                                  </li>
                                  <li>
                                    We consider illegal activity of using offensive language
                                    or content by a User/Player as a material breach of
                                    these Terms of Use and Service and accordingly we shall
                                    have the right to take appropriate action against the
                                    User/Player, involved in such illegal activity of using
                                    offensive language or content by a User/Player on
                                    PokerBaazi, as we deem fit on case to case basis.
                                  </li>
                                  <li>
                                    In the event we, at PokerBaazi, find that the
                                    User/Player is involved in such illegal activity of
                                    using offensive language or content, we shall be
                                    entitled to take any of the actions as we deem fit on a
                                    case to case basis, including but not limited to:
                                    <ol type="a">
                                      <li>
                                        Warning to the said User/Player and temporary
                                        blocking for the time period decided by PokerBaazi
                                        at its sole discretion.
                                      </li>
                                      <li>
                                        Penalty funds/amount/chips/bonus deduction from
                                        User’s/Player’s PokerBaazi account.
                                      </li>
                                      <li>
                                        Immediately blocking a User’s/Player’s access to
                                        PokerBaazi including but not limited to ejecting
                                        them from all cash tables and not allowing them to
                                        continue in any running tournament that they are
                                        playing and/or are registered in any tournaments in
                                        future on PokerBaazi.
                                      </li>
                                      <li>
                                        Seizing all funds/amount/chips/bonus held in the
                                        User's/Player’s account.
                                      </li>
                                      <li>
                                        Termination/closure of a User's/Player’s PokerBaazi
                                        Account.
                                      </li>
                                      <li>
                                        Taking appropriate legal action against a
                                        User/Player under applicable law in the
                                        jurisdiction.
                                      </li>
                                    </ol>
                                  </li>
                                </ol>
                              </li>
                              <li>
                                <b className="text-blue">DISGUISED USER AND FAILED TELEPHONE VERIFICATION</b>
                                <ol type="i">
                                  <li>
                                    The User/Player shall not disguise himself/herself to be
                                    another User/Player and play games of skill on
                                    PokerBaazi. PokerBaazi verifies all the
                                    details/information and documents of each User/Player
                                    uploaded on PokerBaazi by each User/Player including but
                                    not limited to registered contact details, verification
                                    documents (as required by PokerBaazi at the time of
                                    withdrawal).
                                  </li>
                                  <li>
                                    PokerBaazi shall verify all the said details/information
                                    and documents from each User/Player through a telephonic
                                    conversation. The answers by the Users/Players shall be
                                    assessed by PokerBaazi and if the User/Player is found
                                    providing wrong answers and/or is unable to answer the
                                    questions (through such telephonic conversation) posed
                                    by PokerBaazi pertaining to the said details/information
                                    and documents uploaded by him/her on PokerBaazi, we
                                    shall be entitled to take any of the following actions
                                    as we deem fit on a case to case basis, including but
                                    not limited to:
                                    <ol type="a">
                                      <li>
                                        Immediately blocking a User’s/Player’s access to
                                        PokerBaazi including but not limited to ejecting
                                        them from all cash tables and not allowing them to
                                        continue in any running tournament that they are
                                        playing and/or are registered in any tournaments in
                                        future on PokerBaazi.
                                      </li>
                                      <li>
                                        Seizing all funds/amount/chips/bonus held in the
                                        User's/Player’s account.
                                      </li>
                                      <li>
                                        Termination/closure of a User's/Player’s PokerBaazi
                                        Account.
                                      </li>
                                      <li>
                                        Taking appropriate legal action against a
                                        User/Player under applicable law in the
                                        jurisdiction.
                                      </li>
                                    </ol>
                                  </li>
                                </ol>
                              </li>
                              <li>
                                <b className="text-blue">FRAUDULENT BEHAVIOUR</b>
                                <ol type="i">
                                  <li>
                                    In the event that we, at PokerBaazi, deem that a
                                    User/Player has engaged or attempted to engage in
                                    fraudulent, unlawful, dishonest or improper activity
                                    while using PokerBaazi, including without limitation,
                                    engaging in any of the activities set forth above or any
                                    other game manipulation, we, at PokerBaazi, shall be
                                    entitled to take such action as we deem fit, including
                                    but not limited to:
                                    <ol type="a">
                                      <li>
                                        Immediately blocking a User’s/Player’s access to
                                        PokerBaazi including but not limited to ejecting
                                        them from all cash tables and not allowing them to
                                        continue in any running tournament that they are
                                        playing and/or are registered in any tournaments in
                                        future on PokerBaazi.
                                      </li>
                                      <li>
                                        Seizing all funds/amount/chips/bonus held in the
                                        User's/Player’s account.
                                      </li>
                                      <li>
                                        Terminating a User's/Player’s PokerBaazi Account.
                                      </li>
                                      <li>
                                        Taking appropriate legal action against a
                                        User/Player under applicable law in the
                                        jurisdiction.
                                      </li>
                                    </ol>
                                  </li>
                                </ol>
                              </li>
                            </ol>
                          </li>
                          <li>
                            In any such cases of unfair and illegal activities (including
                            but not limited to chip dumping, collusion, soft play, chat
                            abuse, misuse of chat for discussing hands, multiple accounts,
                            use of BOTS), User/Player IDs shall be investigated by
                            PokerBaazi/Baazi Networks Pvt. Ltd. can take upto seven (7)
                            working days before a decision on the same is communicated to
                            the User/Player. User/Player shall render all cooperation
                            required by PokerBaazi/Baazi Networks Pvt. Ltd. in order to
                            carry out such investigation.
                          </li>
                          <li>
                            Post the investigation, any decision taken by PokerBaazi/Baazi
                            Networks Pvt. Ltd. shall not be disputed by the User/Player and
                            the decision shall be considered final and binding. User/Player
                            agrees that no further queries shall be entertained post the
                            final decision.
                          </li>
                        </ol>
                      </div>

                    </div>
                    <div id="terms2" className="container tab-pane fade"><br />

                      <h5 className="text-blue font-weight-bold" >
                        Who is an affiliate and to whom do we give an affiliate panel:
                      </h5>
                      <p className="text-justify pContent">
                        An affiliate is a user who gets other players/users signed up on the
                        website through his/her signup code/link (given to each user at the
                        time of membership registration). An affiliate gets a commission
                        based on the gameplay of the players/users who have obtained
                        membership through his/her signup code. The percentage of commission
                        that an Affiliate is entitled to shall be as per the table below,
                        which is subject to change from time to time at the sole discretion
                        of the Company. <br /><br />
                        Affiliate panel is given to an agent who promises at least 15
                        depositing users or is able to activate at least 20 inactive users.
                        A user is called inactive if the last login of that particular
                        player is more than 6 months old. Decision of terming a player
                        inactive is at company’s discretion. As a measure of transparency,
                        each Affiliate shall be entitled to verify, through the Affiliate
                        panel given to them, the reward points earned by the players
                        introduced by such Affiliate.
                      </p>
                      <h5 className="text-blue font-weight-bold pt-3 mb-3">Commision Slab</h5>
                      <div className="baazirewards__table table-responsive mb-4">
                        <table className="table text-left pt-2">
                          <thead className="baazirewards__tablehead">
                            <tr>
                              <th>Reward Points earned by a player in a week</th>
                              <th>% Rakeback to Player</th>
                              <th>% Rakeback to Affiliate</th>
                            </tr>
                          </thead>
                          <tbody className="baazirewards__tabletxt">
                            <tr>
                              <td>0-49</td>
                              <td>NA</td>
                              <td>NA</td>
                            </tr>
                            <tr>
                              <td>50-349</td>
                              <td>10</td>
                              <td>10</td>
                            </tr>
                            <tr>
                              <td>350-999</td>
                              <td>20</td>
                              <td>20</td>
                            </tr>
                            <tr>
                              <td>1000-3749</td>
                              <td>30</td>
                              <td>30</td>
                            </tr>
                            <tr>
                              <td>3750 &amp; above</td>
                              <td>40</td>
                              <td>20</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-justify pContent">
                        Commision is credited on every Monday at 7 AM for the entire week.
                        The calculation for commission amount is done depending on the
                        reward points generated by the player. The calculation can be
                        checked from the above table.
                      </p>
                      <h5 className="text-blue font-weight-bold pt-3 mb-3">
                        Exceptional cases for additional Commission:
                      </h5>
                      <p className="text-justify pContent">
                        Players tagged under a particular Affiliate or any user may be
                        offered additional commission as per the above table, based on the
                        number of hands played by a particular player. Such additional
                        benefits may be offered by the Company at its sole discretion.
                      </p>
                      <h5 className="text-blue font-weight-bold pt-3 mb-3">
                        Extra benefits like- deposit codes, tourney tickets, sign up codes:
                      </h5>
                      <p className="text-justify pContent">
                        Additional benefits such as deposit offers, extra signup codes &amp;
                        tournament tickets may be offered to an affiliate based on the
                        performance of players tagged under him/her from time to time for
                        re-marketing and reactivation purposes. This helps an affiliate to
                        keep the currently tagged players active on the platform.
                      </p>
                      <h5 className="text-blue font-weight-bold pt-3 mb-3">
                        Withdrawal/Transfer Policy w.r.t Affiliate Rakeback/Commission:
                      </h5>
                      <ol className="text-justify pContent pl-3">
                        <li>
                          Affiliate withdrawals are processed once every week. Withdrawals
                          submitted between 00:00:00 last Friday and 11:59:59 on Thursday
                          are processed on Friday.
                        </li>
                        <li>
                          5% TDS is applicable on all affiliate withdrawals irrespective of
                          the amount of withdrawal and on the amount that the affiliate uses
                          to credit chips as rakeback to his respective players.
                        </li>
                        <li>
                          In case of invoice generated from company/proprietor, 18% GST will
                          be applicable to the principal withdrawal amount. Failure to
                          submit the GST will result in seizure of withdrawals from the
                          affiliate account.
                        </li>
                        <li>
                          An Affiliate is entitled to transfer/share all or portion of his
                          rakeback with any of the players tagged to such Affiliate.
                        </li>
                      </ol>
                    </div>

                  </div>
                </div>
              </div>

              <div id='viewall' className="mt-3 hide-section">
                <div className="accordion mb-5" id="accordionExample">

                  {
                    faqdata.catagories.map(faqdata => {
                      return (
                        <div className="accordion-item">
                          <h2 className="accordion-header" >
                            <button onClick={() => { eval(faqdata.clickbtn + "()") }} className="accordion-button collapsed" type="button" >
                              <span> <img src={faqdata.imgurl}
                              />&nbsp;&nbsp; {faqdata.name}
                              </span>
                            </button>
                          </h2>
                        </div>
                      )
                    })
                  }

                </div>
              </div>

              <div id='accountandkyc' className="mt-3 hide-section">
                <div className="accordion" id="accordiongl">
                  {
                    faqdata.accountkyc.map(faqdata => {
                      return (
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${faqdata.id}`} aria-expanded="false" aria-controls={faqdata.id}>
                              <span dangerouslySetInnerHTML={{ __html: faqdata.ques }}>
                              </span>
                            </button>
                          </h2>
                          <div id={faqdata.id} className="accordion-collapse collapse" data-bs-parent="#accordiongl">
                            <div className="accordion-body" dangerouslySetInnerHTML={{ __html: faqdata.ques }}>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>


              <div id='myaccount' className="mt-3 hide-section">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading1">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                        My KYC status is pending.
                      </button>
                    </h2>
                    <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Pending: Your details are being reviewed by our team. The review is completed within 24 hours.

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id='deposit' className="mt-3 hide-section">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading1">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                        My KYC status is pending.
                      </button>
                    </h2>
                    <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Pending: Your details are being reviewed by our team. The review is completed within 24 hours.

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id='withdrawal' className="mt-3 hide-section">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading1">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                        My KYC status is pending.
                      </button>
                    </h2>
                    <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Pending: Your details are being reviewed by our team. The review is completed within 24 hours.

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id='tds' className="mt-3 hide-section">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading1">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                        My KYC status is pending.
                      </button>
                    </h2>
                    <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Pending: Your details are being reviewed by our team. The review is completed within 24 hours.

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id='promotions' className="mt-3 hide-section">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading1">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                        My KYC status is pending.
                      </button>
                    </h2>
                    <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Pending: Your details are being reviewed by our team. The review is completed within 24 hours.

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id='invite' className="mt-3 hide-section">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading1">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                        My KYC status is pending.
                      </button>
                    </h2>
                    <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Pending: Your details are being reviewed by our team. The review is completed within 24 hours.

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id='refunds' className="mt-3 hide-section">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading1">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                        My KYC status is pending.
                      </button>
                    </h2>
                    <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Pending: Your details are being reviewed by our team. The review is completed within 24 hours.

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id='unfair' className="mt-3 hide-section">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading1">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                        My KYC status is pending.
                      </button>
                    </h2>
                    <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Pending: Your details are being reviewed by our team. The review is completed within 24 hours.

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id='responsible' className="mt-3 hide-section">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading1">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                        My KYC status is pending.
                      </button>
                    </h2>
                    <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Pending: Your details are being reviewed by our team. The review is completed within 24 hours.

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id='gameplay' className="mt-3 hide-section">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading1">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                        My KYC status is pending.
                      </button>
                    </h2>
                    <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Pending: Your details are being reviewed by our team. The review is completed within 24 hours.

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id='registration' className="mt-3 hide-section">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading1">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                        My KYC status is pending.
                      </button>
                    </h2>
                    <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Pending: Your details are being reviewed by our team. The review is completed within 24 hours.

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id='events' className="mt-3 hide-section">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading1">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                        My KYC status is pending.
                      </button>
                    </h2>
                    <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Pending: Your details are being reviewed by our team. The review is completed within 24 hours.

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id='navigation' className="mt-3 hide-section">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading1">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                        My KYC status is pending.
                      </button>
                    </h2>
                    <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Pending: Your details are being reviewed by our team. The review is completed within 24 hours.

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id='tutorial' className="mt-3 hide-section">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading1">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                        My KYC status is pending.
                      </button>
                    </h2>
                    <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Pending: Your details are being reviewed by our team. The review is completed within 24 hours.

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id='legality' className="mt-3 hide-section">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading1">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                        My KYC status is pending.
                      </button>
                    </h2>
                    <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Pending: Your details are being reviewed by our team. The review is completed within 24 hours.

                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
