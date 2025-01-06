import { useState, useEffect } from "react";
import Image from "next-export-optimize-images/image";
import Homesecurity from "@/public/images/home-security.png";
import parse from "html-react-parser";

const CityBio = ({ city, state }) => {
  const [spunHeadline, setSpunHeadline] = useState("");
  const [spunFirstSentence, setFirstSentence] = useState("");
  const [spunSecondSentence, setSecondSentence] = useState("");
  const [spunThirdSentence, setThirdSentence] = useState("");

  const spinText = (text) => {
    const regex = /{([^{}]*)}/g;
    return text.replace(regex, (match, group) => {
      const options = group.split("|");
      return options[Math.floor(Math.random() * options.length)];
    });
  };

  const headline = `{ADT is ${city}'s top pick for home security|
Protect your ${city} home with ADT|
ADT is ${city}'s go-to for home protection|
Safeguard your ${city} home with ADT|
ADT is ${city}'s trusted name in home security|
Homes in ${city} stay safe with ADT|
ADT is ${city}'s first choice for security solutions|
Keep your home in ${city} secure with ADT|
ADT is ${city}'s best defense against intruders|
Choose ADT for ${city}'s home security needs|
${city} residents trust ADT for home security|
ADT is ${city}'s reliable home security partner|
ADT makes ${city} homes safer|
${city} residents turns to ADT for home security|
ADT is ${city}'s favorite home security provider|
${city} chooses ADT for safety and peace of mind|
ADT is the security leader in ${city}|
Protect your family in ${city} with ADT|
ADT is ${city}'s preferred home security system|
ADT: The security choice for ${city} homes|
ADT is ${city}'s home security expert|
Your ${city} home deserves ADT|
ADT is ${city}'s choice for smart home security|
${city} homes rely on ADT for safety|
ADT is ${city}'s best bet for home security|
ADT is the preferred choice in ${city} for home safety|
ADT is ${city}'s solution for a secure home|
Secure your ${city} home with ADT|
${city} stays safe with ADT home security|
ADT is ${city}'s trusted home protection choice}`;

  const firstSentences = `{Secure your home with confidence using ADT’s advanced security systems designed for your peace of mind.|
Ensure the safety of your family with ADT's cutting-edge home security solutions tailored to meet your needs.|
Protect what matters most with ADT’s comprehensive security systems that offer unmatched reliability.|
Discover the difference ADT can make in safeguarding your home with state-of-the-art security technology.|
Elevate your home’s security with ADT’s innovative solutions that keep you connected and protected.|
Experience the ultimate in home protection with ADT’s modern security systems designed for your safety.|
ADT’s advanced monitoring services provide the security and peace of mind your home deserves.|
Keep your home secure with ADT’s reliable and easy-to-use security solutions designed for any situation.|
Transform your home into a secure haven with ADT’s top-of-the-line security features and services.|
ADT delivers robust security solutions to ensure that your home and loved ones are always protected.|
Safeguard your home effortlessly with ADT’s advanced security solutions that offer peace of mind.|
With ADT, you can trust in a security system that offers comprehensive protection for your entire home.|
ADT provides the ultimate protection for your home, combining advanced technology with reliable monitoring.|
Protect your home with confidence using ADT’s state-of-the-art security features and expert monitoring.|
ADT’s security solutions are designed to offer you and your family unparalleled safety and convenience.|
Keep your property safe with ADT’s expertly crafted security systems tailored to your home’s needs.|
Enjoy peace of mind knowing your home is protected by ADT’s cutting-edge security solutions.|
ADT brings you the latest innovations in home security, ensuring your home is always secure.|
Trust ADT to deliver a comprehensive security system that meets all your protection needs.|
With ADT, your home is always under watchful eyes, providing you with continuous security.|
ADT’s home security systems are designed to provide complete protection and peace of mind.|
Protect your family with ADT’s advanced security systems that are both reliable and easy to use.|
ADT offers state-of-the-art technology that keeps your home safe and your family secure.|
Secure your property with ADT’s comprehensive security systems designed for ultimate protection.|
ADT’s security solutions provide the advanced protection your home needs in today’s world.|
Experience top-tier home protection with ADT’s innovative and reliable security systems.|
Protect your home day and night with ADT’s advanced monitoring and security solutions.|
ADT provides the protection you need with systems that are trusted by millions of homeowners.|
With ADT’s advanced technology, your home will always be secure and under constant protection.|
Trust ADT to keep your home safe with their industry-leading security solutions.|
Protecting your home is easy with ADT’s comprehensive and user-friendly security systems.|
ADT offers security solutions that give you peace of mind knowing your home is protected.|
ADT’s systems are designed to keep your home safe and secure at all times.|
Enjoy the benefits of ADT’s state-of-the-art security solutions tailored to your needs.|
ADT provides the peace of mind you deserve with advanced home security technology.|
Trust in ADT’s expertise to keep your home and loved ones safe with their reliable systems.|
With ADT, you can rest easy knowing your home is protected by the best in security technology.|
ADT’s home security systems are designed to be both effective and easy to use.|
Protect what matters most with ADT’s reliable and advanced security solutions.|
ADT offers a range of security options to keep your home and family safe at all times.|
Secure your home with ADT’s comprehensive security systems that provide round-the-clock protection.|
ADT’s advanced monitoring and security systems offer unmatched protection for your home.|
Trust ADT to deliver the best in home security with their cutting-edge technology.|
Protect your home with ADT’s top-of-the-line security solutions designed for ultimate safety.|
ADT’s systems are designed to be both easy to use and highly effective in protecting your home.|
Keep your home safe with ADT’s reliable security systems that offer complete protection.|
ADT provides advanced security solutions to keep your home and loved ones safe.|
With ADT, your home is always secure and protected by the best in the industry.|
ADT’s security systems are designed to provide comprehensive protection for your entire home.|
Protect your home and family with ADT’s advanced and reliable security systems.|
ADT offers cutting-edge security solutions to ensure your home is always safe.|
With ADT, your home is protected by state-of-the-art security systems that offer peace of mind.|
ADT’s security systems are designed to be both effective and easy to use, providing you with confidence.|
Keep your home and family safe with ADT’s advanced security solutions designed for your needs.|
ADT provides the protection you need with their reliable and comprehensive security systems.|
Trust ADT to keep your home safe with their cutting-edge security technology.|
Protect your home effortlessly with ADT’s state-of-the-art security systems that offer peace of mind.|
ADT’s security solutions are designed to provide continuous protection for your home and loved ones.|
Keep your home secure with ADT’s reliable security systems that offer round-the-clock protection.|
ADT provides the ultimate protection for your home with their advanced security systems.|
Trust ADT to deliver the best in home security with their top-of-the-line solutions.|
Protect your home with ADT’s comprehensive security systems that offer complete protection.|
ADT’s systems are designed to be both user-friendly and highly effective in protecting your home.|
Secure your home with ADT’s advanced security solutions that provide peace of mind.|
ADT offers state-of-the-art security systems to keep your home and family safe at all times.|
With ADT, your home is protected by reliable security systems that offer continuous protection.|
ADT’s security systems are designed to provide you with confidence and peace of mind.|
Keep your home and loved ones safe with ADT’s comprehensive security solutions.|
ADT provides the ultimate protection for your home with their cutting-edge security technology.|
Protect your home with ADT’s reliable security systems that offer complete protection.|
ADT offers advanced security solutions to ensure your home is always safe and secure.|
With ADT, your home is protected by top-of-the-line security systems designed for ultimate safety.|
ADT’s security systems are designed to provide round-the-clock protection for your home.|
Trust ADT to deliver the best in home security with their advanced technology.|
Protect your home with ADT’s comprehensive security systems that offer peace of mind.|
ADT’s systems are designed to be both easy to use and highly effective in protecting your home.|
Keep your home safe with ADT’s reliable security systems that offer complete protection.|
ADT provides advanced security solutions to keep your home and loved ones safe.|
With ADT, your home is always secure and protected by the best in the industry.|
ADT’s security systems are designed to provide comprehensive protection for your entire home.|
Protect your home and family with ADT’s advanced and reliable security systems.|
ADT offers cutting-edge security solutions to ensure your home is always safe.|
With ADT, your home is protected by state-of-the-art security systems that offer peace of mind.|
ADT’s security systems are designed to be both effective and easy to use, providing you with confidence.|
Keep your home and family safe with ADT’s advanced security solutions designed for your needs.|
ADT provides the protection you need with their reliable and comprehensive security systems.|
Trust ADT to keep your home safe with their cutting-edge security technology.|
Protect your home effortlessly with ADT’s state-of-the-art security systems that offer peace of mind.|
ADT’s security solutions are designed to provide continuous protection for your home and loved ones.|
Keep your home secure with ADT’s reliable security systems that offer round-the-clock protection.|
ADT provides the ultimate protection for your home with their advanced security systems.|
Trust ADT to deliver the best in home security with their top-of-the-line solutions.|
Protect your home with ADT’s comprehensive security systems that offer complete protection.|
ADT’s systems are designed to be both user-friendly and highly effective in protecting your home.|
Secure your home with ADT’s advanced security solutions that provide peace of mind.|
ADT offers state-of-the-art security systems to keep your home and family safe at all times.|
With ADT, your home is protected by reliable security systems that offer continuous protection.|
ADT’s security systems are designed to provide you with confidence and peace of mind.|
Keep your home and loved ones safe with ADT’s comprehensive security solutions.|
ADT provides the ultimate protection for your home with their cutting-edge security technology.}`;

  const secondSentences = `{With real-time alerts and 24/7 monitoring, you can trust that your home is always under vigilant protection.|
From smart home integration to quick emergency response, you can feel safe and secure at all times.|
Our technology ensures that every corner of your property is covered, providing you with confidence and control at all times.|
Expert monitoring services keep you connected and informed, no matter where you are.|
Enjoy round-the-clock surveillance and instant notifications to keep your home secure and your mind at ease.|
You get peace of mind from comprehensive security features and proactive emergency response.|
Trust our advanced technology to provide reliable alerts and support when you need it most.|
Our systems offer seamless integration with smart home devices for a comprehensive security experience.|
Stay connected with your home through our intuitive app and real-time monitoring features.|
Experience peace of mind with a reliable system that ensures your home is always protected.|
With 24/7 surveillance and immediate alerts, your home is always under watchful eyes.|
Enjoy the convenience of remote access and instant notifications, keeping your home secure from anywhere.|
We provide you with the latest security technology and dedicated support to keep your property safe.|
Our systems deliver reliable monitoring and instant alerts to help you stay on top of your home’s security.|
Rest easy knowing our advanced systems offer continuous protection and quick emergency response.|
With our cutting-edge technology, you can trust that your home is always safe and secure.|
Our comprehensive systems provide the protection your home needs, giving you peace of mind.|
Stay informed and in control with real-time alerts and 24/7 professional monitoring.|
Experience the confidence that comes with round-the-clock protection and advanced security features.|
We offer a range of security solutions to ensure your home is always protected.|
Our systems are designed to provide continuous protection and peace of mind for your home.|
Enjoy the benefits of smart home integration and 24/7 monitoring to keep your home secure.|
With our advanced technology, you can monitor your home from anywhere, at any time.|
Trust our expert monitoring services to keep your home safe and secure around the clock.|
Experience the peace of mind that comes with knowing your home is always under protection.|
Our technology ensures that your home is safe, secure, and always under watchful eyes.|
Enjoy the convenience of remote access and instant notifications to keep your home protected.|
With our comprehensive security solutions, you can rest easy knowing your home is safe.|
Our systems offer seamless integration with smart home devices for enhanced security.|
Trust our advanced technology to provide reliable alerts and quick emergency response.|
Experience peace of mind with a system that offers round-the-clock protection for your home.|
Our expert monitoring services ensure that your home is always protected and secure.|
With real-time alerts and continuous monitoring, your home is always under protection.|
Stay connected with your home through our intuitive app and advanced security features.|
Our systems are designed to provide continuous protection and peace of mind for your family.|
Experience the benefits of smart home integration and 24/7 monitoring for your home.|
With our cutting-edge technology, you can monitor your home from anywhere, at any time.|
Trust our expert monitoring services to keep your property safe and secure around the clock.|
Our technology ensures that your home is always protected and secure, giving you peace of mind.|
Enjoy the convenience of remote access and instant notifications for complete home protection.|
With our comprehensive security solutions, you can trust that your home is always safe.|
Our systems offer seamless integration with smart home devices for a complete security experience.|
Trust our advanced technology to provide reliable alerts and proactive emergency response.|
Experience peace of mind with a system that offers continuous protection for your entire home.|
Our expert monitoring services ensure that your home is always protected and secure.|
With real-time alerts and constant monitoring, your home is always under vigilant protection.|
Stay connected with your home through our intuitive app and advanced security technology.|
Our systems are designed to provide round-the-clock protection and peace of mind for your family.|
Experience the benefits of smart home integration and continuous monitoring for your home.|
With our cutting-edge technology, you can trust that your home is always safe and secure.|
Trust our expert monitoring services to keep your property safe and secure 24/7.|
Our technology ensures that your home is always under vigilant protection, giving you peace of mind.|
Enjoy the convenience of remote access and instant alerts to keep your home secure from anywhere.|
With our comprehensive security solutions, you can rest easy knowing your home is always safe.|
Our systems offer seamless integration with smart home devices for enhanced home security.|
Trust our advanced technology to provide reliable alerts and quick emergency response when needed.|
Experience peace of mind with a system that offers round-the-clock protection for your home.|
Our expert monitoring services ensure that your home is always protected and under watchful eyes.|
With real-time alerts and 24/7 surveillance, your home is always safe and secure.|
Stay connected with your home through our intuitive app and advanced security systems.|
Our systems are designed to provide continuous protection and peace of mind for your entire family.|
Experience the benefits of smart home integration and constant monitoring for complete security.|
With our cutting-edge technology, you can trust that your home is always protected and secure.|
Trust our expert monitoring services to keep your property safe and secure 24/7.|
Our technology ensures that your home is always under vigilant protection, giving you peace of mind.|
Enjoy the convenience of remote access and instant alerts to keep your home secure from anywhere.|
With our comprehensive security solutions, you can rest easy knowing your home is always safe.|
Our systems offer seamless integration with smart home devices for enhanced home security.|
Trust our advanced technology to provide reliable alerts and quick emergency response when needed.|
Experience peace of mind with a system that offers round-the-clock protection for your home.|
Our expert monitoring services ensure that your home is always protected and under watchful eyes.|
With real-time alerts and 24/7 surveillance, your home is always safe and secure.|
Stay connected with your home through our intuitive app and advanced security systems.|
Our systems are designed to provide continuous protection and peace of mind for your entire family.|
Experience the benefits of smart home integration and constant monitoring for complete security.|
With our cutting-edge technology, you can trust that your home is always protected and secure.|
Trust our expert monitoring services to keep your property safe and secure 24/7.|
Our technology ensures that your home is always under vigilant protection, giving you peace of mind.|
Enjoy the convenience of remote access and instant alerts to keep your home secure from anywhere.|
With our comprehensive security solutions, you can rest easy knowing your home is always safe.|
Our systems offer seamless integration with smart home devices for enhanced home security.|
Trust our advanced technology to provide reliable alerts and quick emergency response when needed.|
Experience peace of mind with a system that offers round-the-clock protection for your home.|
Our expert monitoring services ensure that your home is always protected and under watchful eyes.|
With real-time alerts and 24/7 surveillance, your home is always safe and secure.|
Stay connected with your home through our intuitive app and advanced security systems.|
Our systems are designed to provide continuous protection and peace of mind for your entire family.|
Experience the benefits of smart home integration and constant monitoring for complete security.|
With our cutting-edge technology, you can trust that your home is always protected and secure.|
Trust our expert monitoring services to keep your property safe and secure 24/7.|
Our technology ensures that your home is always under vigilant protection, giving you peace of mind.|
Enjoy the convenience of remote access and instant alerts to keep your home secure from anywhere.|
With our comprehensive security solutions, you can rest easy knowing your home is always safe.|
Our systems offer seamless integration with smart home devices for enhanced home security.|
Trust our advanced technology to provide reliable alerts and quick emergency response when needed.|
Experience peace of mind with a system that offers round-the-clock protection for your home.|
Our expert monitoring services ensure that your home is always protected and under watchful eyes.|
With real-time alerts and 24/7 surveillance, your home is always safe and secure.|
Stay connected with your home through our intuitive app and advanced security systems.|
Our systems are designed to provide continuous protection and peace of mind for your entire family.}`;

  const thirdSentences = `{Trust in our security solutions to keep your home and loved ones safe, no matter what.|
Protect your home effortlessly with our comprehensive security solutions and expert monitoring.|
Your home is always protected with our advanced security features and 24/7 monitoring.|
Let us safeguard your home with our comprehensive security solutions and 24/7 monitoring services.|
Protect your home with our cutting-edge security solutions, designed to give you peace of mind.|
Experience total peace of mind with our advanced security solutions, tailored to your home’s needs.|
Rest assured that your home is in good hands with our state-of-the-art security solutions.|
Enhance your home’s safety with our advanced security systems and round-the-clock monitoring.|
Our security systems ensure continuous protection, giving you confidence in your home’s safety.|
Protect what matters most with our reliable security systems and dedicated monitoring services.|
Your peace of mind is our priority, and our security solutions are designed to provide just that.|
We offer comprehensive protection for your home with our range of advanced security features.|
Let us provide the security and peace of mind your family deserves with our advanced solutions.|
Protect your home effortlessly with our top-tier security features and reliable monitoring.|
Our security systems are designed to keep your home safe and secure, no matter the situation.|
Enhance your home’s safety with our advanced security systems and round-the-clock monitoring.|
Our systems provide the highest level of protection, ensuring your home is always secure.|
Your home’s safety is assured with our cutting-edge security technology and 24/7 monitoring.|
Rest easy knowing your home is protected by our advanced security systems and professional monitoring services.|
Protect your home with our reliable and advanced security solutions, designed to give you peace of mind.|

Our comprehensive systems include essential features for complete home protection:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Door and window sensors</li>
<li className="city-paragraph text-special-grey font-manrope">High-definition security cameras</li>
<li className="city-paragraph text-special-grey font-manrope">24/7 professional monitoring</li>
<li className="city-paragraph text-special-grey font-manrope">Smart home integration</li>
</ul>|

Explore the advanced features designed to protect every aspect of your home:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Real-Time Alerts: Receive instant notifications on your phone for any unusual activity detected around your property.</li>
<li className="city-paragraph text-special-grey font-manrope">Video Surveillance: Monitor your home in real-time with high-definition cameras that provide clear footage day and night.</li>
<li className="city-paragraph text-special-grey font-manrope">Emergency Response: Quick and efficient response times ensure that help is on the way as soon as an alert is triggered.</li>
</ul>|

Protect your home effortlessly with our comprehensive security solutions and expert monitoring.|
Here are some key components of our security systems to enhance your protection:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Motion sensors for detecting intrusions</li>
<li className="city-paragraph text-special-grey font-manrope">Smart locks for remote access and control</li>
<li className="city-paragraph text-special-grey font-manrope">Remote access via mobile app</li>
<li className="city-paragraph text-special-grey font-manrope">24/7 monitoring services for continuous protection</li>
</ul>|

Our security systems offer advanced features to ensure the safety of your home:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Video Doorbell: See who’s at your door and talk to visitors from anywhere, ensuring your home is secure.</li>
<li className="city-paragraph text-special-grey font-manrope">Motion Detectors: Detect movement inside your home and receive alerts to help ward off intruders.</li>
<li className="city-paragraph text-special-grey font-manrope">Smart Home Integration: Control your security system with voice commands or through a user-friendly app.</li>
</ul>|

Your home is always protected with our advanced security features and 24/7 monitoring.|
Our systems include a variety of security components designed to keep your home safe:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Indoor and outdoor cameras</li>
<li className="city-paragraph text-special-grey font-manrope">Fire and carbon monoxide detectors</li>
<li className="city-paragraph text-special-grey font-manrope">Professional monitoring services</li>
<li className="city-paragraph text-special-grey font-manrope">Home automation features</li>
</ul>|

Enhance your home’s protection with these key features in our security systems:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Smart Locks: Lock or unlock your doors remotely with a simple tap on your smartphone, ensuring convenience and security.</li>
<li className="city-paragraph text-special-grey font-manrope">Surveillance Cameras: Monitor your property in real-time, day or night, with high-definition video feeds.</li>
<li className="city-paragraph text-special-grey font-manrope">24/7 Monitoring: Our professionals are always ready to respond to emergencies, ensuring your home is never left unprotected.</li>
</ul>|

Let us safeguard your home with our comprehensive security solutions and 24/7 monitoring services.|
Our security systems come equipped with essential features for your peace of mind:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Motion sensors for detecting unauthorized access</li>
<li className="city-paragraph text-special-grey font-manrope">Smart locks that you can control remotely</li>
<li className="city-paragraph text-special-grey font-manrope">Real-time alerts and notifications</li>
<li className="city-paragraph text-special-grey font-manrope">Professional monitoring available around the clock</li>
</ul>|

Our advanced security systems include features that ensure your home is well-protected:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Video Surveillance: Keep a close eye on your home with high-definition video feeds that offer clear visibility, day or night.</li>
<li className="city-paragraph text-special-grey font-manrope">Smart Alarms: Receive instant alerts when suspicious activity is detected, ensuring you're always informed.</li>
<li className="city-paragraph text-special-grey font-manrope">Emergency Response: Our quick response services ensure that help is dispatched promptly when needed.</li>
</ul>|

Protect your home with confidence, knowing our advanced security systems have you covered.|
Our comprehensive security solutions include a range of essential features:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Door and window sensors for perimeter security</li>
<li className="city-paragraph text-special-grey font-manrope">High-definition cameras for real-time monitoring</li>
<li className="city-paragraph text-special-grey font-manrope">24/7 professional monitoring services</li>
<li className="city-paragraph text-special-grey font-manrope">Seamless integration with smart home devices</li>
</ul>|

Our security systems offer robust features to enhance the safety of your home:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Motion Detectors: Detect any movement inside your home and receive immediate alerts to take action if necessary.</li>
<li className="city-paragraph text-special-grey font-manrope">Smart Home Integration: Control and monitor your security system using a convenient app or voice commands.</li>
<li className="city-paragraph text-special-grey font-manrope">Emergency Response: Benefit from quick and efficient response times, ensuring help is on the way when needed.</li>
</ul>|

Experience peace of mind with our comprehensive security solutions, designed for your home’s safety.|
Our security systems are equipped with features to provide full protection for your home:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Indoor and outdoor surveillance cameras</li>
<li className="city-paragraph text-special-grey font-manrope">Motion sensors to detect unauthorized access</li>
<li className="city-paragraph text-special-grey font-manrope">24/7 monitoring services</li>
<li className="city-paragraph text-special-grey font-manrope">Smart home compatibility for easy control</li>
</ul>|

Enhance your home’s security with these advanced features:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Smart Locks: Secure your home with the ability to lock or unlock your doors remotely from anywhere.</li>
<li className="city-paragraph text-special-grey font-manrope">Video Surveillance: Monitor your property in real-time with high-definition video cameras that offer clear visibility.</li>
<li className="city-paragraph text-special-grey font-manrope">24/7 Monitoring: Our team is always on standby to respond to any emergencies, providing continuous protection.</li>
</ul>|

Let us help you protect your home with our reliable security solutions and professional monitoring.|
Our systems offer a variety of features to ensure your home is fully protected:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Door and window sensors</li>
<li className="city-paragraph text-special-grey font-manrope">High-definition security cameras</li>
<li className="city-paragraph text-special-grey font-manrope">Real-time alerts and notifications</li>
<li className="city-paragraph text-special-grey font-manrope">24/7 professional monitoring</li>
</ul>|

Your home’s safety is our top priority, which is why we offer advanced security systems and monitoring services.|
Our comprehensive security systems are designed with essential features for total protection:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Motion detectors</li>
<li className="city-paragraph text-special-grey font-manrope">Smart locks</li>
<li className="city-paragraph text-special-grey font-manrope">Video doorbells</li>
<li className="city-paragraph text-special-grey font-manrope">Professional monitoring</li>
</ul>|

Our systems come with features that enhance the security of your home:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Smart Locks: Secure your home with remote locking and unlocking capabilities.</li>
<li className="city-paragraph text-special-grey font-manrope">Surveillance Cameras: Keep an eye on your property with live video feeds accessible from anywhere.</li>
<li className="city-paragraph text-special-grey font-manrope">Emergency Alerts: Receive instant notifications of any suspicious activity detected by your system.</li>
</ul>|

Protect your home with our cutting-edge security solutions, designed to give you peace of mind.|
Our security systems include a range of essential features for full home protection:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Door and window sensors</li>
<li className="city-paragraph text-special-grey font-manrope">Indoor and outdoor cameras</li>
<li className="city-paragraph text-special-grey font-manrope">24/7 professional monitoring</li>
<li className="city-paragraph text-special-grey font-manrope">Remote access and control via mobile app</li>
</ul>|

We offer advanced security features to keep your home safe:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Motion Sensors: Detect movement and receive alerts instantly on your mobile device.</li>
<li className="city-paragraph text-special-grey font-manrope">Smart Cameras: Monitor your home in real-time with high-definition video feeds.</li>
<li className="city-paragraph text-special-grey font-manrope">Professional Monitoring: Enjoy peace of mind knowing that experts are watching over your home 24/7.</li>
</ul>|

Trust our security systems to provide the protection your home needs, day and night.|
Our systems come with all the features you need to keep your home secure:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">High-definition surveillance cameras</li>
<li className="city-paragraph text-special-grey font-manrope">Smart locks for easy access control</li>
<li className="city-paragraph text-special-grey font-manrope">Real-time alerts and notifications</li>
<li className="city-paragraph text-special-grey font-manrope">24/7 monitoring services</li>
</ul>|

Our security systems include a variety of advanced features to protect your home:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Video Surveillance: Keep a close watch on your home with clear, high-definition video feeds.</li>
<li className="city-paragraph text-special-grey font-manrope">Smart Locks: Control access to your home from anywhere with a simple tap on your smartphone.</li>
<li className="city-paragraph text-special-grey font-manrope">Emergency Response: Our monitoring team is ready to respond to any emergency at a moment’s notice.</li>
</ul>|

Rest easy knowing your home is protected by our advanced security systems and professional monitoring services.|
Our security systems offer all the features you need to protect your home:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Motion sensors for detecting intrusions</li>
<li className="city-paragraph text-special-grey font-manrope">Smart locks for easy and secure access control</li>
<li className="city-paragraph text-special-grey font-manrope">Indoor and outdoor surveillance cameras</li>
<li className="city-paragraph text-special-grey font-manrope">24/7 professional monitoring</li>
</ul>|

We offer a range of features to enhance the safety and security of your home:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Smart Alarms: Receive instant notifications if suspicious activity is detected.</li>
<li className="city-paragraph text-special-grey font-manrope">Surveillance Cameras: Monitor your property in real-time with high-definition video feeds.</li>
<li className="city-paragraph text-special-grey font-manrope">Emergency Response: Our quick response services ensure that help is dispatched immediately in case of an emergency.</li>
</ul>|

Protect your home with our reliable and advanced security solutions, designed to give you peace of mind.|
Our comprehensive systems are designed with essential features to protect your home:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Door and window sensors</li>
<li className="city-paragraph text-special-grey font-manrope">High-definition cameras</li>
<li className="city-paragraph text-special-grey font-manrope">Professional monitoring</li>
<li className="city-paragraph text-special-grey font-manrope">Smart home integration</li>
</ul>|

Enhance your home’s protection with these advanced security features:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Video Doorbells: See who’s at your door and communicate with visitors from anywhere.</li>
<li className="city-paragraph text-special-grey font-manrope">Motion Detectors: Detect movement inside your home and receive instant alerts.</li>
<li className="city-paragraph text-special-grey font-manrope">Smart Home Integration: Control your security system using a convenient app or voice commands.</li>
</ul>|

Experience total peace of mind with our advanced security solutions, tailored to your home’s needs.|
Our systems include all the essential features you need to protect your home:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Indoor and outdoor surveillance cameras</li>
<li className="city-paragraph text-special-grey font-manrope">Smart locks for easy access control</li>
<li className="city-paragraph text-special-grey font-manrope">24/7 professional monitoring services</li>
<li className="city-paragraph text-special-grey font-manrope">Remote access and control via mobile app</li>
</ul>|

We provide advanced features to ensure your home is well-protected:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Motion Sensors: Detect any unauthorized movement and receive instant alerts.</li>
<li className="city-paragraph text-special-grey font-manrope">Surveillance Cameras: Keep a close watch on your home with high-definition video feeds.</li>
<li className="city-paragraph text-special-grey font-manrope">Emergency Response: Our monitoring team is ready to respond to any emergency, day or night.</li>
</ul>|

Your home is always safe with our reliable security systems and professional monitoring services.|
Our systems come equipped with features to provide comprehensive protection for your home:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">High-definition surveillance cameras</li>
<li className="city-paragraph text-special-grey font-manrope">Smart locks for easy access control</li>
<li className="city-paragraph text-special-grey font-manrope">24/7 monitoring services</li>
<li className="city-paragraph text-special-grey font-manrope">Real-time alerts and notifications</li>
</ul>|

Let us protect your home with our advanced security systems and professional monitoring services.|
Our systems are equipped with features that ensure the safety and security of your home:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Door and window sensors</li>
<li className="city-paragraph text-special-grey font-manrope">Smart locks for remote access</li>
<li className="city-paragraph text-special-grey font-manrope">Indoor and outdoor surveillance cameras</li>
<li className="city-paragraph text-special-grey font-manrope">24/7 professional monitoring</li>
</ul>|

Enhance your home’s security with these key features in our systems:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Smart Cameras: Monitor your home in real-time with high-definition video feeds accessible from anywhere.</li>
<li className="city-paragraph text-special-grey font-manrope">Motion Detectors: Detect unauthorized movement and receive alerts instantly.</li>
<li className="city-paragraph text-special-grey font-manrope">Emergency Response: Our monitoring team is always ready to respond to any emergency at a moment’s notice.</li>
</ul>|

Protect your home with our reliable security solutions, designed to give you peace of mind.|
Our comprehensive systems include all the features you need to keep your home secure:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Door and window sensors</li>
<li className="city-paragraph text-special-grey font-manrope">High-definition security cameras</li>
<li className="city-paragraph text-special-grey font-manrope">24/7 professional monitoring</li>
<li className="city-paragraph text-special-grey font-manrope">Smart home integration</li>
</ul>|

Our security systems come equipped with advanced features to ensure your home is safe:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Smart Alarms: Receive instant notifications if suspicious activity is detected.</li>
<li className="city-paragraph text-special-grey font-manrope">Video Surveillance: Monitor your home with high-definition video feeds accessible from anywhere.</li>
<li className="city-paragraph text-special-grey font-manrope">Emergency Response: Our quick response services ensure that help is dispatched immediately in case of an emergency.</li>
</ul>|

Experience total peace of mind with our advanced security systems, tailored to meet your home’s needs.|
Our systems offer essential features for comprehensive home protection:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Motion sensors</li>
<li className="city-paragraph text-special-grey font-manrope">Smart locks</li>
<li className="city-paragraph text-special-grey font-manrope">Indoor and outdoor surveillance cameras</li>
<li className="city-paragraph text-special-grey font-manrope">24/7 professional monitoring</li>
</ul>|

We offer a range of features to enhance the safety and security of your home:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Smart Cameras: Monitor your property in real-time with high-definition video feeds.</li>
<li className="city-paragraph text-special-grey font-manrope">Motion Sensors: Detect unauthorized movement and receive instant alerts on your mobile device.</li>
<li className="city-paragraph text-special-grey font-manrope">Professional Monitoring: Our team is ready to respond to any emergency, ensuring your home is always protected.</li>
</ul>|

Rest easy knowing your home is protected by our advanced security solutions and professional monitoring services.|
Our security systems offer all the features you need to protect your home:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">High-definition surveillance cameras</li>
<li className="city-paragraph text-special-grey font-manrope">Smart locks for easy access control</li>
<li className="city-paragraph text-special-grey font-manrope">Real-time alerts and notifications</li>
<li className="city-paragraph text-special-grey font-manrope">24/7 monitoring services</li>
</ul>|

Our systems include a variety of advanced features to protect your home:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Smart Alarms: Receive instant notifications when suspicious activity is detected.</li>
<li className="city-paragraph text-special-grey font-manrope">Video Surveillance: Keep an eye on your property with live video feeds accessible from anywhere.</li>
<li className="city-paragraph text-special-grey font-manrope">Emergency Response: Our monitoring team is always ready to respond to any emergency, ensuring your home is never left unprotected.</li>
</ul>|

Trust our security solutions to provide the protection your home needs, day and night.|
Our systems include all the essential features you need to keep your home secure:
<ul className="flex flex-col max-lg:justify-between pt-5">
<li className="city-paragraph text-special-grey font-manrope">Motion sensors for detecting intrusions</li>
<li className="city-paragraph text-special-grey font-manrope">Smart locks for easy and secure access control</li>
<li className="city-paragraph text-special-grey font-manrope">Indoor and outdoor surveillance cameras</li>
<li className="city-paragraph text-special-grey font-manrope">24/7 professional monitoring</li>
</ul>}`;

  useEffect(() => {
    setSpunHeadline(spinText(headline));
    setFirstSentence(spinText(firstSentences));
    setSecondSentence(spinText(secondSentences));
    setThirdSentence(spinText(thirdSentences));
  }, [city, firstSentences, secondSentences, thirdSentences, headline]);

  return (
    <div className="home-security">
      <div className="container">
        <div className="home-security-main flex flex-col-reverse lg:flex-row py-10 lg:py-20 justify-between items-center">
          <div className="basis-[570px]">
            <div className="service-title text-start pt-8 lg:pt-0 md:max-w-[768px] lg:max-w-full mx-auto">
              <h2 className="font-manrope font-extrabold text-balance text-special-blue text-[34px] lg:text-[40px] xl:text-[50px] leading-[120%] max-w-[820px] mx-auto mb-[20px] text-center lg:text-start">{spunHeadline}</h2>

              <div className="m-0 text-[18px] font-manrope leading-[28px] font-regular text-[#2c2c2c] text-center lg:text-start">
                {spunFirstSentence}
                {spunSecondSentence}
                {parse(spunThirdSentence)}
              </div>
            </div>
          </div>
          <div className=" lg:mr-[0] lg:max-w-[460px] xl:max-w-full xl:mr-[0] xxl:mr-[-48px] lg:ml-[40px]">
            <Image src={Homesecurity} alt="img" className="w-full h-full object-cover"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityBio;
