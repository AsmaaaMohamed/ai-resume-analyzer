import { useState, type FormEvent } from "react";
import FileUploader from "~/components/FileUploader";
import Navbar from "~/components/Navbar";

const Upload = () => {
    const [isProcessing , setIsProcessing] = useState(false);
    const [statusText, setStatusText] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const handleFileSelect = (file: File | null) => {
        if (file) {
            setFile(file);
            setStatusText('Processing...');
            setIsProcessing(true);
        }
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{

    }
    return (
        <main className="bg-[url('/images/bg-main.svg')]">
            <Navbar/>
            <section className="main-section">
                <div className="page-heading py-16">
                    <h1>Smart feedback for your dream job</h1>
                    {isProcessing ?(
                        <>
                            <h2>
                                {statusText}
                                <img src="/images/resume-scan.gif" className="w-full"/>
                            </h2>
                        </>
                    ): (<h2>Drop your resume for an  ATS score and improvement tips</h2>)}
                    {!isProcessing &&(
                        <form id="upload-form" onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
                            <div className="form-div">
                                <label htmlFor="company-name">Company Name</label>
                                <input type="text" id="company-name" placeholder="Company Name" name="company-name"/>
                            </div>
                            <div className="form-div">
                                <label htmlFor="job-title">job-title</label>
                                <input type="text" id="job-title" placeholder="Job Title" name="job-title"/>
                            </div>
                            <div className="form-div">
                                <label htmlFor="job-description">Job Description</label>
                                <textarea rows={5} id="job-description" placeholder="Job Description" name="job-description"/>
                            </div>
                            <div className="form-div">
                                <label htmlFor="uploader">Upload Resume</label>
                                <FileUploader onFileSelect={handleFileSelect}/>
                            </div>
                            <button className="primary-button" type="submit">Analyze Resume</button>
                        </form>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Upload;
