import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IconMail, IconMessage, IconMapPin, IconPhonePlus } from '@tabler/icons-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SupportForm from '../components/supprtForm';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const cardRefs = useRef([]);

    useEffect(() => {
        // Scroll to the top of the page when the component loads
        window.scrollTo(0, 0);
    }, []);


    useEffect(() => {
        cardRefs.current.forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: index * 0.2, // Slight delay for staggered effect
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        end: "top 50%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, []);

    return (
        <div className="pt-[60px] font-parkinsans relative">
            <div className='absolute right-0 top-20 opacity-[0.3]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="1174" viewBox="0 0 936 1174" fill="none">
                    <path d="M643.309 589.89C691.145 613.436 686.059 569.301 677.536 544.291C668.629 519.419 669.426 497.863 670.938 490.194C703.722 352.154 488.257 509.677 576.299 510.921C664.34 512.165 583.515 560.458 643.309 589.89Z" stroke="#2B2B2B" stroke-width="2" />
                    <path d="M890.989 1577.15C1373.07 1814.52 1321.81 1369.58 1235.93 1117.43C1146.16 866.683 1154.19 649.365 1169.43 572.05C1499.82 -819.621 -671.614 768.472 215.662 781.01C1102.94 793.547 288.389 1280.42 890.989 1577.15Z" stroke="#2B2B2B" stroke-width="2" />
                    <path d="M655.104 636.902C723.618 670.63 716.333 607.41 704.127 571.583C691.369 535.955 692.511 505.077 694.677 494.092C741.632 296.355 433.026 522.001 559.126 523.782C685.226 525.564 569.462 594.742 655.104 636.902Z" stroke="#2B2B2B" stroke-width="2" />
                    <path d="M666.898 683.914C756.09 727.825 746.607 645.518 730.716 598.876C714.108 552.492 715.595 512.292 718.414 497.99C779.541 240.556 377.793 534.324 541.952 536.644C706.112 538.963 555.408 629.026 666.898 683.914Z" stroke="#2B2B2B" stroke-width="2" />
                    <path d="M678.692 730.926C788.563 785.02 776.881 683.627 757.306 626.169C736.848 569.028 738.679 519.506 742.152 501.888C817.451 184.757 322.561 546.648 524.779 549.505C726.997 552.362 541.355 663.31 678.692 730.926Z" stroke="#2B2B2B" stroke-width="2" />
                    <path d="M690.487 777.939C821.035 842.214 807.155 721.735 783.897 653.461C759.587 585.564 761.763 526.721 765.89 505.786C855.361 128.959 267.33 558.972 507.606 562.366C747.883 565.761 527.301 697.594 690.487 777.939Z" stroke="#2B2B2B" stroke-width="2" />
                    <path d="M702.281 824.951C853.508 899.409 837.429 759.844 810.487 680.754C782.327 602.101 784.848 533.935 789.628 509.684C893.27 73.1597 212.098 571.295 490.433 575.228C768.769 579.16 513.248 731.878 702.281 824.951Z" stroke="#2B2B2B" stroke-width="2" />
                    <path d="M714.075 871.963C885.98 956.604 867.703 797.952 837.076 708.046C805.066 618.637 807.931 541.149 813.365 513.582C931.179 17.361 156.865 583.619 473.26 588.089C789.654 592.56 499.193 766.162 714.075 871.963Z" stroke="#2B2B2B" stroke-width="2" />
                    <path d="M725.87 918.975C918.453 1013.8 897.978 836.061 863.667 735.339C827.806 635.174 831.016 548.364 837.104 517.479C969.09 -38.4379 101.634 595.942 456.087 600.951C810.54 605.959 485.141 800.446 725.87 918.975Z" stroke="#2B2B2B" stroke-width="2" />
                    <path d="M737.664 965.987C950.926 1070.99 928.251 874.169 890.257 762.632C850.546 651.71 854.1 555.578 860.841 521.377C1007 -94.2366 46.4019 608.266 438.914 613.812C831.426 619.358 471.087 834.73 737.664 965.987Z" stroke="#2B2B2B" stroke-width="2" />
                    <path d="M749.458 1013C983.398 1128.19 958.525 912.278 916.846 789.924C873.285 668.246 877.184 562.793 884.579 525.275C1044.91 -150.036 -8.83044 620.589 421.74 626.673C852.311 632.757 457.033 869.015 749.458 1013Z" stroke="#2B2B2B" stroke-width="2" />
                    <path d="M761.252 1060.01C1015.87 1185.38 988.799 950.386 943.436 817.217C896.024 684.783 900.268 570.007 908.316 529.173C1082.82 -205.834 -64.0626 632.913 404.567 639.535C873.197 646.156 442.979 903.299 761.252 1060.01Z" stroke="#2B2B2B" stroke-width="2" />
                    <path d="M773.047 1107.02C1048.34 1242.58 1019.07 988.495 970.026 844.509C918.764 701.319 923.352 577.221 932.054 533.071C1120.73 -261.633 -119.295 645.237 387.394 652.396C894.082 659.556 428.926 937.583 773.047 1107.02Z" stroke="#2B2B2B" stroke-width="2" />
                    <path d="M784.841 1154.04C1080.82 1299.77 1049.35 1026.6 996.617 871.802C941.504 717.856 946.437 584.436 955.793 536.969C1158.64 -317.432 -174.526 657.56 370.221 665.257C914.968 672.955 414.872 971.867 784.841 1154.04Z" stroke="#2B2B2B" stroke-width="2" />
                    <path d="M796.635 1201.05C1113.29 1356.97 1079.62 1064.71 1023.21 899.094C964.243 734.392 969.521 591.65 979.53 540.867C1196.55 -373.231 -229.758 669.884 353.048 678.119C935.854 686.354 400.818 1006.15 796.635 1201.05Z" stroke="#2B2B2B" stroke-width="2" />
                    <path d="M808.429 1248.06C1145.76 1414.16 1109.9 1102.82 1049.8 926.387C986.982 750.928 992.605 598.865 1003.27 544.765C1234.46 -429.03 -284.99 682.207 335.874 690.98C956.739 699.753 386.765 1040.43 808.429 1248.06Z" stroke="#2B2B2B" stroke-width="2" />
                    <path d="M820.224 1295.07C1178.23 1471.36 1140.17 1140.93 1076.39 953.679C1009.72 767.465 1015.69 606.079 1027.01 548.663C1272.37 -484.828 -340.222 694.531 318.702 703.841C977.625 713.152 372.711 1074.72 820.224 1295.07Z" stroke="#2B2B2B" stroke-width="2" />
                    <path d="M832.018 1342.09C1210.71 1528.55 1170.44 1179.04 1102.98 980.972C1032.46 784.001 1038.77 613.293 1050.74 552.561C1310.28 -540.627 -395.455 706.854 301.528 716.703C998.51 726.551 358.657 1109 832.018 1342.09Z" stroke="#2B2B2B" stroke-width="2" />
                    <path d="M843.812 1389.1C1243.18 1585.75 1200.72 1217.15 1129.57 1008.26C1055.2 800.538 1061.86 620.508 1074.48 556.459C1348.19 -596.426 -450.686 719.178 284.355 729.564C1019.4 739.951 344.604 1143.29 843.812 1389.1Z" stroke="#2B2B2B" stroke-width="2" />
                    <path d="M855.607 1436.11C1275.65 1642.94 1230.99 1255.25 1156.16 1035.56C1077.94 817.074 1084.94 627.722 1098.22 560.356C1386.09 -652.225 -505.918 731.502 267.182 742.426C1040.28 753.35 330.55 1177.57 855.607 1436.11Z" stroke="#2B2B2B" stroke-width="2" />
                    <path d="M867.401 1483.12C1308.12 1700.13 1261.27 1293.36 1182.75 1062.85C1100.68 833.61 1108.03 634.936 1121.96 564.254C1424 -708.024 -561.15 743.825 250.009 755.287C1061.17 766.749 316.497 1211.86 867.401 1483.12Z" stroke="#2B2B2B" stroke-width="2" />
                    <path d="M879.195 1530.13C1340.6 1757.33 1291.54 1331.47 1209.34 1090.14C1123.42 850.147 1131.11 642.151 1145.69 568.152C1461.91 -763.822 -616.383 756.149 232.835 768.148C1082.05 780.148 302.443 1246.14 879.195 1530.13Z" stroke="#2B2B2B" stroke-width="2" />
                </svg>
            </div>
            <h1 className="font-light text-2xl sm:text-3xl text-center py-10 md:py-20">Contact Our Team</h1>

            {/* Card Container with Grid Layout */}
            <div className="cardContainer w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:gap-10 gap-4 px-5 lg:px-20 py-10 md:py-16 z-10">
                {[
                    {
                        icon: <IconMail stroke={2} />,
                        title: "Send a Mail",
                        description: "Speak to our Team",
                        link: "klic@mngmnt.com",
                    },
                    {
                        icon: <IconMessage stroke={2} />,
                        title: "Chat To Support",
                        description: "Speak to our Team",
                        link: "klic@mngmnt.com",
                    },
                    {
                        icon: <IconMapPin stroke={2} />,
                        title: "Visit Us",
                        description: "Speak to our Team",
                        link: "klic@mngmnt.com",
                    },
                    {
                        icon: <IconPhonePlus stroke={2} />,
                        title: "Call Our Team",
                        description: "Speak to our Team",
                        link: "klic@mngmnt.com",
                    },
                ].map((card, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardRefs.current[index] = el)}
                        className="border-2 border-gray-400 sm:p-6 p-2 rounded-xl flex flex-col items-left"
                    >
                        <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#0a2140] rounded-md text-white mb-5">
                            {card.icon}
                        </div>
                        <h3 className="font-bold text-sm sm:text-base">{card.title}</h3>
                        <p className="text-sm">{card.description}</p>
                        <Link className="underline text-sm">{card.link}</Link>
                    </div>
                ))}
            </div>

            <SupportForm />
        </div>
    );
}
