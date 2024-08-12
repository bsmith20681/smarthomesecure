import { useState, useEffect } from "react";

const SpinTextParagraph = () => {
  const [spunText, setSpunText] = useState("");
  const headline = `{ADT is ${city}'s top pick for home security|
Protect your ${city} home with ADT|
ADT is ${city}'s go-to for home protection|
Safeguard your ${city} home with ADT|
ADT is ${city}'s trusted name in home security|
${city} homes stay safe with ADT|
ADT is ${city}'s first choice for security solutions|
Keep ${city} secure with ADT|
ADT is ${city}'s best defense against intruders|
Choose ADT for ${city}'s home security needs|
${city} residents trust ADT for home security|
ADT is ${city}'s reliable home security partner|
ADT makes ${city} homes safer|
${city} turns to ADT for home security|
ADT is ${city}'s favorite home security provider|
${city} chooses ADT for safety and peace of mind|
ADT is the security leader in ${city}|
Protect your ${city} family with ADT|
ADT is ${city}'s preferred home security system|
${city} trusts ADT for complete home protection|
ADT is ${city}'s home security expert|
Your ${city} home deserves ADT|
ADT is ${city}'s choice for smart home security|
${city} homes rely on ADT for safety|
ADT is ${city}'s best bet for home security|
${city} counts on ADT for home security|
ADT is ${city}'s solution for a secure home|
Secure your ${city} home with ADT|
${city} stays safe with ADT home security|
ADT is ${city}'s trusted home protection choice}`;

  const spinText = (text) => {
    const regex = /{([^{}]*)}/g;
    return text.replace(regex, (match, group) => {
      const options = group.split("|");
      return options[Math.floor(Math.random() * options.length)];
    });
  };

  useEffect(() => {
    setSpunText(spinText(text));
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-bold">{headline}</h1>
      <p>{spunText}</p>
    </div>
  );
};

export default SpinTextParagraph;
