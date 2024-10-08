import { FadeWrapper } from "../FadeWrapper";

import "./styles.css"

const SectionWrapper = ({children, id="", border=true, flexDirection = "column", padding = 0, gap = 0, justifyContent="start", alignItems="start"}) => {
    return(
        <section className="section-wrapper" id={id} style={{
            flexDirection: flexDirection,
            padding: padding,
            gap: gap,
            justifyContent: justifyContent,
            alignItems: alignItems
        }}>
            {border && <div className="section-decoration"></div>}

            <FadeWrapper>
                {children}
            </FadeWrapper>
        </section>

    );
}


export { SectionWrapper };