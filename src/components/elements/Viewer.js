import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { SizeMe } from 'react-sizeme';
import { Container } from "react-bootstrap";

export default function AllPages(props) {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const { pdf } = props;

    return (
        <Container id="album-container">
            <div id="album-border">
                <SizeMe
                    monitorHeight
                    refreshRate={128}
                    refreshMode={"debounce"}
                    render={({ size }) => (

                        <Document
                            file={pdf}
                            options={{ workerSrc: "/pdf.worker.js" }}
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            {Array.from(new Array(numPages), (el, index) => (
                                <Page key={`page_${index + 1}`} pageNumber={index + 1} width={size.width} />
                            ))}
                        </Document>
                    )}
                />
            </div>
        </Container>
    );
}