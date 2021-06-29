import { React } from "react";

import clsx from "clsx";

import { flowChartClasses } from "../styles/FlowChartStyles";

export default function FlowChart() {
  const styles = flowChartClasses();

  return (
    <div className={styles.flowChartContainer}>
      <div className={styles.background}>
        <div className={styles.title}>
          <h1 className={styles.titleText}>
            How we work <span className={styles.line1}>together</span>
          </h1>
        </div>
        <div className={styles.flowChart}>
          {/* <div className={styles.flowChartBackground} /> */}
          <div className={styles.flowChartDiagram}>
            <svg
              className={styles.flowChartDiagramSvg}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://wwww.w3.org/1999/xlink"
              fill="none"
              viewBox="0 0 1035 300"
            >
              <g className={styles.flowChartEdgeGroup} data-line-group="1" id="flowChart-2_edge-1_2">
                <path
                  className={styles.flowChartDottedLine}
                  stroke="#141433"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="16"
                  d="M 44,57L 204,57"
                ></path>
                <path
                  className={styles.flowChartSolidLine}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="16"
                  d="M 44,57L 204,57"
                  strokeWidth="3"
                  stroke="#240405"
                />
              </g>
              <g className={styles.flowChartEdgeGroup} data-line-group="1" id="flowChart-2_edge-2_3">
                <path
                  className={styles.flowChartDottedLine}
                  stroke="#141433"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="16"
                  d="M 204,57L 364,57"
                />
                <path
                  className={styles.flowChartSolidLine}
                  stroke="#240405"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="16"
                  strokeWidth="3"
                  d="M 204,57L 364,57"
                />
              </g>
              <g className={styles.flowChartEdgeGroup} data-line-group="1" id="flowChart-2_edge-3_4">
                <path
                  className={styles.flowChartDottedLine}
                  stroke="#141433"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="16"
                  d="M 364,57L 524,57"
                />
                <path
                  className={styles.flowChartSolidLine}
                  stroke="#240405"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="16"
                  strokeWidth="3"
                  d="M 364,57L 524,57"
                />
              </g>
              <g className={styles.flowChartEdgeGroup} data-line-group="1" id="flowChart-2_edge-4_5">
                <path
                  className={styles.flowChartDottedLine}
                  stroke="#141433"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="16"
                  d="M 524, 57 L 524, 57 Q 524, 217 364, 217 L 364, 217L 364, 217"
                />
                <path
                  className={styles.flowChartSolidLine}
                  stroke="#240405"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="16"
                  strokeWidth="3"
                  d="M 524, 57 L 524, 57 Q 524, 217 364, 217 L 364, 217L 364, 217"
                />
              </g>
              <g className={styles.flowChartEdgeGroup} data-line-group="1" id="flowChart-2_edge-5_2">
                <path
                  className={styles.flowChartDottedLine}
                  stroke="#141433"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="16"
                  d="M 364, 217 L 364, 217 Q 204, 217 204, 57 L 204,57L 204, 57"
                />
                <path
                  className={styles.flowChartSolidLine}
                  stroke="#240405"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="16"
                  strokeWidth="3"
                  d="M 364, 217 L 364, 217 Q 204, 217 204, 57 L 204,57L 204, 57"
                />
              </g>
              <g className={styles.flowChartEdgeGroup} data-line-group="1" id="flowChart-2_edge-4_6">
                <path
                  className={styles.flowChartDottedLine}
                  stroke="#141433"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="16"
                  d="M524, 57L 684, 57"
                />
                <path
                  className={styles.flowChartSolidLine}
                  stroke="#240405"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="16"
                  strokeWidth="3"
                  d="M524, 57L 684, 57"
                />
              </g>
              <g className={styles.flowChartEdgeGroup} data-line-group="1" id="flowChart-2_edge-6_7">
                <path
                  className={styles.flowChartDottedLine}
                  stroke="#141433"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="16"
                  d="M684, 57L 844, 57"
                />
                <path
                  className={styles.flowChartSolidLine}
                  stroke="#240405"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="16"
                  strokeWidth="3"
                  d="M684, 57L 844, 57"
                />
              </g>
              <g className={styles.flowChartEdgeGroup} data-line-group="1" id="flowChart-2_edge-7_8">
                <path
                  className={styles.flowChartDottedLine}
                  stroke="#141433"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="16"
                  d="M844, 57L 1004, 57"
                />
                <path
                  className={styles.flowChartSolidLine}
                  stroke="#240405"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="16"
                  strokeWidth="3"
                  d="M844, 57L 1004, 57"
                />
              </g>
              <g className={clsx(styles.flowChartNodeGroup, styles.chatNode)} data-line-group="1" id="flowChart_chat_bubble_node">
                <circle cx="44" cy="57" r="30" stroke="black" fill="#ffffff" strokeWidth="1" className={styles.pulseNode} />
                <svg width="25" height="25" x="32" y="45" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.476 8.38098C11.9512 8.38098 9.90454 10.4277 9.90454 12.9524V20.5715C9.90454 23.0962 11.9512 25.1429 14.476 25.1429L18.2367 25.1414L20.8505 28.844C21.1004 29.1976 21.4869 29.4258 21.9112 29.4774L22.095 29.4885C22.8765 29.4885 23.5206 28.9002 23.6086 28.1424L23.6188 27.9647L23.6204 25.1414L25.1426 25.1429C27.6674 25.1429 29.7141 23.0962 29.7141 20.5715V12.9524C29.7141 10.4277 27.6674 8.38098 25.1426 8.38098H14.476Z"
                    stroke="#141433"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.90472 20.5714L6.8571 23.619V17.5237H5.47614C3.80689 17.5237 2.44826 16.1809 2.42873 14.5118L2.32175 5.36892C2.30205 3.68588 3.65046 2.30555 5.3335 2.28585C5.34538 2.28571 5.35727 2.28564 5.36916 2.28564H19.0476C20.7307 2.28564 22.0952 3.65011 22.0952 5.33326V8.38088"
                    stroke="#141433"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <g className={clsx(styles.flowChartTooltip, styles.chatTooltip)} data-line-group="1" id="flowChart_chat_tooltip">
                  <svg width="287" height="151" x="15" y="90" viewBox="0 0 287 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter_chat)">
                      <path
                        d="M8 19C8 14.5817 11.5817 11 16 11H271C275.418 11 279 14.5817 279 19V131C279 135.418 275.418 139 271 139H16C11.5817 139 8 135.418 8 131V19Z"
                        fill="white"
                      />
                      <path
                        d="M22.138 9.13175L24.3077 5.6869C25.0922 4.4414 26.9078 4.4414 27.6923 5.6869L29.862 9.13176C30.5944 10.2946 31.8724 11 33.2466 11L35 11L35 12L32.6946 12L19.3054 12L17 12L17 11L18.7534 11C20.1276 11 21.4056 10.2946 22.138 9.13175Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter_chat"
                        x="0"
                        y="0.752808"
                        width="287"
                        height="150.247"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="4" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.262745 0 0 0 0 0.262745 0 0 0 0 0.360784 0 0 0 0.16 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                      </filter>
                    </defs>
                    <text x="22" y="42">
                      <tspan fontWeight="bold" fill="#141433">
                        Chat & Quote
                      </tspan>
                      <tspan x="22" y="70" fill="#43435C">
                        Get in touch to chat about your
                      </tspan>
                      <tspan x="22" y="94" fill="#43435C">
                        project. We'll get a quote to you
                      </tspan>
                      <tspan x="22" y="118" fill="#43435C">
                        shortly after.
                      </tspan>
                    </text>
                  </svg>
                </g>
              </g>
              <g className={clsx(styles.flowChartNodeGroup, styles.requestNode)} data-line-group="1" id="flowChart_refresh_node">
                <circle cx="364" cy="217" r="30" stroke="black" fill="#ffffff" strokeWidth="1" />
                <svg width="25" height="25" x="352" y="205" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.11923 19.1268C5.19615 23.22 8.46388 26.6012 12.8449 27.7751C19.3481 29.5176 26.0326 25.6584 27.7751 19.1551M4.11923 19.1268L10.0067 20.7044M4.11923 19.1268L2.54163 25.0144M27.8808 12.8732C26.71 8.95221 23.3978 5.36174 19.1551 4.22492C12.6519 2.4824 5.96744 6.34169 4.22491 12.8449M27.8808 12.8732L21.9932 11.2956M27.8808 12.8732L29.4583 6.98566"
                    stroke="#141433"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <g className={clsx(styles.flowChartTooltip, styles.requestTooltip)} data-line-group="1" id="flowChart_request_tooltip">
                  <svg width="295" height="144" x="392" y="148" viewBox="0 0 295 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter_request)">
                      <rect x="16" y="4" width="271" height="128" rx="8" fill="white" />
                      <path
                        d="M14.1319 64.138L10.687 66.3077C9.44152 67.0922 9.44152 68.9078 10.687 69.6923L14.1319 71.862C15.2947 72.5944 16.0001 73.8724 16.0001 75.2466L16.0001 77L17.0001 77L17.0001 74.6946L17.0001 61.3054L17.0001 59L16.0001 59L16.0001 60.7534C16.0001 62.1276 15.2947 63.4056 14.1319 64.138Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter_request"
                        x="0.00012207"
                        y="0"
                        width="295"
                        height="144"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="4" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.262745 0 0 0 0 0.262745 0 0 0 0 0.360784 0 0 0 0.16 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                      </filter>
                    </defs>
                    <text x="27" y="36">
                      <tspan fontWeight="bold" fill="#141433">
                        Request Changes
                      </tspan>

                      <tspan x="27" y="64" className={styles.toolTipText}>
                        Reviews are where we get your
                      </tspan>
                      <tspan x="27" y="88" className={styles.toolTipText}>
                        feedback on the designs. You can
                      </tspan>
                      <tspan x="27" y="112" className={styles.toolTipText}>
                        request changes at this point.
                      </tspan>
                    </text>
                  </svg>
                </g>
              </g>
              <g className={clsx(styles.flowChartNodeGroup, styles.designNode)} data-line-group="1" id="flowChart_pen_node">
                <circle cx="204" cy="57" r="30" stroke="black" fill="#ffffff" strokeWidth="1" />
                <svg width="25" height="25" x="192" y="45" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M25.9048 6.09524C27.1672 7.3576 27.1672 9.4043 25.9048 10.6667L11.4286 25.1429L5.33337 26.6667L6.85718 20.6573L21.3392 6.10107C22.5323 4.90183 24.4344 4.83716 25.704 5.91049L25.9048 6.09524Z"
                    stroke="#141433"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M23.619 9.90479L25.1428 11.4286" stroke="#141433" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <g className={clsx(styles.flowChartTooltip, styles.designTooltip)} data-line-group="1" id="flowChart_design_tooltip">
                  <svg width="287" height="127" x="60" y="90" viewBox="0 0 287 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter_design)">
                      <path
                        d="M8 19C8 14.5817 11.5817 11 16 11H271C275.418 11 279 14.5817 279 19V107C279 111.418 275.418 115 271 115H16C11.5817 115 8 111.418 8 107V19Z"
                        fill="white"
                      />
                      <path
                        d="M139.638 9.13175L141.808 5.6869C142.592 4.4414 144.408 4.4414 145.192 5.6869L147.362 9.13176C148.094 10.2946 149.372 11 150.747 11L152.5 11L152.5 12L150.195 12L136.805 12L134.5 12L134.5 11L136.253 11C137.628 11 138.906 10.2946 139.638 9.13175Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter_design"
                        x="0"
                        y="0.752808"
                        width="287"
                        height="126.247"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="4" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.262745 0 0 0 0 0.262745 0 0 0 0 0.360784 0 0 0 0.16 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                      </filter>
                    </defs>
                    <text x="22" y="42">
                      <tspan fontWeight="bold" fill="#141433">
                        Design
                      </tspan>
                      <tspan x="22" y="70" className={styles.toolTipText}>
                        Once the quote has been accepted
                      </tspan>
                      <tspan x="22" y="94" className={styles.toolTipText}>
                        the design process will begin
                      </tspan>
                    </text>
                  </svg>
                </g>
              </g>
              <g className={clsx(styles.flowChartNodeGroup, styles.partnerNode)} data-line-group="1" id="flowChart_happy_face_node">
                <circle cx="524" cy="57" r="30" stroke="black" fill="#ffffff" strokeWidth="1" />
                <svg width="25" height="25" x="512" y="45" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 28.1905C22.7327 28.1905 28.1905 22.7327 28.1905 16C28.1905 9.26743 22.7327 3.80957 16 3.80957C9.26743 3.80957 3.80957 9.26743 3.80957 16C3.80957 22.7327 9.26743 28.1905 16 28.1905Z"
                    stroke="#141433"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="svgSmile"
                  />
                  <path
                    d="M12.1904 13.7142C13.032 13.7142 13.7142 13.032 13.7142 12.1904C13.7142 11.3489 13.032 10.6666 12.1904 10.6666C11.3489 10.6666 10.6666 11.3489 10.6666 12.1904C10.6666 13.032 11.3489 13.7142 12.1904 13.7142Z"
                    fill="#141433"
                    className="svgSmileEyes"
                  />
                  <path
                    d="M19.8095 13.7142C20.651 13.7142 21.3333 13.032 21.3333 12.1904C21.3333 11.3489 20.651 10.6666 19.8095 10.6666C18.9679 10.6666 18.2856 11.3489 18.2856 12.1904C18.2856 13.032 18.9679 13.7142 19.8095 13.7142Z"
                    fill="#141433"
                    className="svgSmileEyes"
                  />
                  <path
                    d="M11.4286 17.5238C12.3472 19.5556 13.871 20.5714 16 20.5714C18.129 20.5714 19.6528 19.5556 20.5714 17.5238"
                    stroke="#141433"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="svgSmile"
                  />
                </svg>
                <g className={clsx(styles.flowChartTooltip, styles.partnerTooltip)} data-line-group="1" id="flowChart_partner_tooltip">
                  <svg width="287" height="127" x="380" y="90" viewBox="0 0 287 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter_partner)">
                      <path
                        d="M8 19C8 14.5817 11.5817 11 16 11H271C275.418 11 279 14.5817 279 19V107C279 111.418 275.418 115 271 115H16C11.5817 115 8 111.418 8 107V19Z"
                        fill="white"
                      />
                      <path
                        d="M139.638 9.13175L141.808 5.6869C142.592 4.4414 144.408 4.4414 145.192 5.6869L147.362 9.13176C148.094 10.2946 149.372 11 150.747 11L152.5 11L152.5 12L150.195 12L136.805 12L134.5 12L134.5 11L136.253 11C137.628 11 138.906 10.2946 139.638 9.13175Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter_partner"
                        x="0"
                        y="0.752686"
                        width="287"
                        height="126.247"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="4" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.262745 0 0 0 0 0.262745 0 0 0 0 0.360784 0 0 0 0.16 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                      </filter>
                    </defs>
                    <text x="22" y="42">
                      <tspan fontWeight="bold" fill="#141433">
                        Our partner
                      </tspan>
                      <tspan x="22" y="70" className={styles.toolTipText}>
                        That's you! We'll keep you up to
                      </tspan>
                      <tspan x="22" y="94" className={styles.toolTipText}>
                        date at all times.
                      </tspan>
                    </text>
                  </svg>
                </g>
              </g>
              <g className={clsx(styles.flowChartNodeGroup, styles.developNode)} data-line-group="1" id="flowChart_code_node">
                <circle cx="684" cy="57" r="30" stroke="black" fill="#ffffff" strokeWidth="1" />
                <svg width="25" height="25" x="672" y="45" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.0475 5.33337L12.9523 26.6667" stroke="#141433" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M9.90471 19.0466L3.81039 12.9523L9.90471 6.85795"
                    stroke="#141433"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.0953 25.1418L28.1896 19.0475L22.0953 12.9532"
                    stroke="#141433"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <g className={clsx(styles.flowChartTooltip, styles.developTooltip)} data-line-group="1" id="flowChart_develop_tooltip">
                  <svg width="287" height="151" x="540" y="90" viewBox="0 0 287 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter_develop)">
                      <path
                        d="M8 19C8 14.5817 11.5817 11 16 11H271C275.418 11 279 14.5817 279 19V131C279 135.418 275.418 139 271 139H16C11.5817 139 8 135.418 8 131V19Z"
                        fill="white"
                      />
                      <path
                        d="M139.638 9.13175L141.808 5.6869C142.592 4.4414 144.408 4.4414 145.192 5.6869L147.362 9.13176C148.094 10.2946 149.372 11 150.747 11L152.5 11L152.5 12L150.195 12L136.805 12L134.5 12L134.5 11L136.253 11C137.628 11 138.906 10.2946 139.638 9.13175Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter_develop"
                        x="0"
                        y="0.752686"
                        width="287"
                        height="150.247"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="4" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.262745 0 0 0 0 0.262745 0 0 0 0 0.360784 0 0 0 0.16 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                      </filter>
                    </defs>
                    <text x="22" y="42">
                      <tspan fontWeight="bold" fill="#141433">
                        Develop
                      </tspan>

                      <tspan x="22" y="70" className={styles.toolTipText}>
                        Once the designs have been
                      </tspan>
                      <tspan x="22" y="94" className={styles.toolTipText}>
                        approved, we will start the
                      </tspan>
                      <tspan x="22" y="118" className={styles.toolTipText}>
                        development on your project.
                      </tspan>
                    </text>
                  </svg>
                </g>
              </g>
              <g className={clsx(styles.flowChartNodeGroup, styles.approvalNode)} data-line-group="1" id="flowChart_circle_check_node">
                <circle cx="364" cy="57" r="30" stroke="black" fill="#ffffff" strokeWidth="1" />
                <svg width="25" height="25" x="352" y="45" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.1905 28.1905C22.9231 28.1905 28.381 22.7327 28.381 16C28.381 9.26743 22.9231 3.80957 16.1905 3.80957C9.45786 3.80957 4 9.26743 4 16C4 22.7327 9.45786 28.1905 16.1905 28.1905Z"
                    stroke="#141433"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.6666 16.5714L13.7142 19.619L21.3333 12"
                    stroke="#141433"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <g className={clsx(styles.flowChartTooltip, styles.approvalTooltip)} data-line-group="1" id="flowChart_approval_tooltip">
                  <svg width="287" height="151" x="220" y="90" viewBox="0 0 287 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter_approval)">
                      <path
                        d="M8 19C8 14.5817 11.5817 11 16 11H271C275.418 11 279 14.5817 279 19V131C279 135.418 275.418 139 271 139H16C11.5817 139 8 135.418 8 131V19Z"
                        fill="white"
                      />
                      <path
                        d="M139.638 9.13175L141.808 5.6869C142.592 4.4414 144.408 4.4414 145.192 5.6869L147.362 9.13176C148.094 10.2946 149.372 11 150.747 11L152.5 11L152.5 12L150.195 12L136.805 12L134.5 12L134.5 11L136.253 11C137.628 11 138.906 10.2946 139.638 9.13175Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter_approval"
                        x="0"
                        y="0.752686"
                        width="287"
                        height="150.247"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="4" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.262745 0 0 0 0 0.262745 0 0 0 0 0.360784 0 0 0 0.16 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                      </filter>
                    </defs>
                    <text x="22" y="42">
                      <tspan fontWeight="bold" fill="#141433">
                        Approval
                      </tspan>
                      <tspan x="22" y="70" className={styles.toolTipText}>
                        The designs will be sent to you to
                      </tspan>
                      <tspan x="22" y="94" className={styles.toolTipText}>
                        review at every stage before
                      </tspan>
                      <tspan x="22" y="118" className={styles.toolTipText}>
                        moving forward.
                      </tspan>
                    </text>
                  </svg>
                </g>
              </g>
              <g className={clsx(styles.flowChartNodeGroup, styles.testNode)} data-line-group="1" id="flowChart_checkboard_node">
                <circle cx="844" cy="57" r="30" stroke="black" fill="#ffffff" strokeWidth="1" />
                <svg width="25" height="25" x="832" y="45" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.4285 6.85706C10.7864 6.85706 9.77049 6.85706 8.38087 6.85706C7.53929 6.85706 6.85706 7.53929 6.85706 8.38087V25.1428C6.85706 25.9843 7.53929 26.6666 8.38087 26.6666H23.619C24.4605 26.6666 25.1428 25.9843 25.1428 25.1428V8.38087C25.1428 7.53929 24.4605 6.85706 23.619 6.85706C22.2645 6.85706 21.2486 6.85706 20.5713 6.85706"
                    stroke="#141433"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.9524 5.33337H19.0476C19.8892 5.33337 20.5714 6.01561 20.5714 6.85718C20.5714 7.69876 19.8892 8.38099 19.0476 8.38099H12.9524C12.1108 8.38099 11.4286 7.69876 11.4286 6.85718C11.4286 6.01561 12.1108 5.33337 12.9524 5.33337Z"
                    stroke="#141433"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.4286 17.5237L14.4762 20.5713L22.0953 12.9523"
                    stroke="#141433"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <g className={clsx(styles.flowChartTooltip, styles.testTooltip)} data-line-group="1" id="flowChart_test_tooltip">
                  <svg width="287" height="175" x="700" y="90" viewBox="0 0 287 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter_test)">
                      <path
                        d="M8 19C8 14.5817 11.5817 11 16 11H271C275.418 11 279 14.5817 279 19V155C279 159.418 275.418 163 271 163H16C11.5817 163 8 159.418 8 155V19Z"
                        fill="white"
                      />
                      <path
                        d="M139.638 9.13175L141.808 5.6869C142.592 4.4414 144.408 4.4414 145.192 5.6869L147.362 9.13176C148.094 10.2946 149.372 11 150.747 11L152.5 11L152.5 12L150.195 12L136.805 12L134.5 12L134.5 11L136.253 11C137.628 11 138.906 10.2946 139.638 9.13175Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter_test"
                        x="0"
                        y="0.752686"
                        width="287"
                        height="174.247"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="4" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.262745 0 0 0 0 0.262745 0 0 0 0 0.360784 0 0 0 0.16 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                      </filter>
                    </defs>
                    <text x="22" y="42">
                      <tspan fontWeight="bold" fill="#141433">
                        Test
                      </tspan>
                      <tspan x="22" y="70" className={styles.toolTipText}>
                        After the development process is
                      </tspan>
                      <tspan x="22" y="94" className={styles.toolTipText}>
                        done, we will test everything to
                      </tspan>
                      <tspan x="22" y="118" className={styles.toolTipText}>
                        ensure that it is perfect and ready
                      </tspan>
                      <tspan x="22" y="142" className={styles.toolTipText}>
                        for deployment.
                      </tspan>
                    </text>
                  </svg>
                </g>
              </g>
              <g className={clsx(styles.flowChartNodeGroup, styles.deployNode)} data-line-group="1" id="flowChart_rocket_node">
                <circle cx="1004" cy="57" r="30" stroke="black" fill="#ffffff" strokeWidth="1" />
                <svg width="25" height="25" x="992" y="45" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 29.7142C20.5715 25.9013 22.0953 21.3299 22.0953 15.9999C22.0953 10.6699 20.5715 6.09852 16 2.28564C11.4286 6.09852 9.90479 10.6699 9.90479 15.9999C9.90479 21.3299 11.4286 25.9013 16 29.7142Z"
                    stroke="#141433"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.5228 21.8844C9.87604 22.2581 9.28117 22.7164 8.73822 23.2593C7.03305 24.9645 6.16276 27.1817 6.12732 29.9108C9.94945 29.7434 12.0429 28.7458 13.6329 27.4009M21.4279 21.8844C22.0746 22.2581 22.6695 22.7164 23.2125 23.2593C24.9176 24.9645 25.7879 27.1817 25.8234 29.9108C22.0012 29.7434 19.9078 28.7458 18.3178 27.4009L21.4279 21.8844Z"
                    stroke="#141433"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.9999 14.4762C17.683 14.4762 19.0475 13.1118 19.0475 11.4286C19.0475 9.74545 17.683 8.38098 15.9999 8.38098C14.3167 8.38098 12.9523 9.74545 12.9523 11.4286C12.9523 13.1118 14.3167 14.4762 15.9999 14.4762Z"
                    stroke="#141433"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <g className={clsx(styles.flowChartTooltip, styles.deployTooltip)} data-line-group="1" id="flowChart_deploy_tooltip">
                  <svg width="287" height="199" x="743" y="90" viewBox="0 0 287 199" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter_deploy)">
                      <path
                        d="M8 19C8 14.5817 11.5817 11 16 11H271C275.418 11 279 14.5817 279 19V179C279 183.418 275.418 187 271 187H16C11.5817 187 8 183.418 8 179V19Z"
                        fill="white"
                      />
                      <path
                        d="M257.138 9.13175L259.308 5.6869C260.092 4.4414 261.908 4.4414 262.692 5.6869L264.862 9.13176C265.594 10.2946 266.872 11 268.247 11L270 11L270 12L267.695 12L254.305 12L252 12L252 11L253.753 11C255.128 11 256.406 10.2946 257.138 9.13175Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter_deploy"
                        x="0"
                        y="0.75293"
                        width="287"
                        height="198.247"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="4" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.262745 0 0 0 0 0.262745 0 0 0 0 0.360784 0 0 0 0.16 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                      </filter>
                    </defs>
                    <text x="22" y="42">
                      <tspan fontWeight="bold" fill="#141433">
                        Deploy
                      </tspan>
                      <tspan x="22" y="70" className={styles.toolTipText}>
                        Once everything has been
                      </tspan>
                      <tspan x="22" y="94" className={styles.toolTipText}>
                        accepted by you, we can either
                      </tspan>
                      <tspan x="22" y="118" className={styles.toolTipText}>
                        deploy your product for you or we
                      </tspan>
                      <tspan x="22" y="142" className={styles.toolTipText}>
                        hand over all the required source
                      </tspan>
                      <tspan x="22" y="166" className={styles.toolTipText}>
                        files to host it yourself.
                      </tspan>
                    </text>
                  </svg>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className={styles.swipeContainer}>
          <p>Swipe for more {"->"}</p>
        </div>
      </div>
    </div>
  );
}
