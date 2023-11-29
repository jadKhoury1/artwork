import {
    FiFacebook,
    FiTwitter,
    FiYoutube,
    FiLinkedin,
    FiSlack,
  } from "react-icons/fi";


  const socialMedia = [
    {
      Icon: FiTwitter,
      url: 'https://twitter.com',
    },
    {
      Icon: FiFacebook,
      url: 'https://www.facebook.com',
    },
    {
      Icon: FiLinkedin,
      url: 'https://www.linkedin.com/in/jad-el-khoury-69255b142/',
    },
    {
      Icon: FiYoutube,
      url: 'https://www.youtube.com',
    },
    {
      Icon: FiSlack,
      url: 'https://slack.com',
    },
  ];

const SocialMedia = ({ }) => {
    return (
        <div className="flex">
            {socialMedia?.map(({ Icon, url }, index) => (
                <a
                    key={index}
                    href={url}
                    target="_blank"
                    className="mr-4 text-xl"
                    aria-hidden="true"
                >
                    <Icon className="" />
                </a>
            ))}
        </div>
    )
};

export default SocialMedia;


