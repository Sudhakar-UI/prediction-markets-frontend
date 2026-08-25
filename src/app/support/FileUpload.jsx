import { useState } from 'react';
import { FormGroup, FormLabel, Button } from 'react-bootstrap';

const FileUpload = () => {
    const [selectedFiles, setSelectedFiles] = useState({ file1: null });
    const [dragActive, setDragActive] = useState(false);

    const MAX_SIZE = 10 * 1024 * 1024; // 10MB
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragActive(true);
    };

    const handleDragLeave = () => {
        setDragActive(false);
    };

    const handleDrop = (e, fileKey) => {
        e.preventDefault();
        setDragActive(false);
        const file = e.dataTransfer.files[0];
        handleFileChange(file, fileKey);
    };

    const handleFileInputChange = (e, fileKey) => {
        const file = e.target.files && e.target.files[0];
        handleFileChange(file, fileKey);
    };

    const handleFileChange = (file, fileKey) => {
        if (!file) return;

        // ✅ File size validation
        if (file.size > MAX_SIZE) {
            alert("File size exceeds 10MB");
            return;
        }

        // ✅ File type validation
        if (!allowedTypes.includes(file.type)) {
            alert("Only JPG, PNG, or PDF files are allowed");
            return;
        }

        // ✅ Use object URL instead of base64 (better performance)
        const previewUrl = URL.createObjectURL(file);

        setSelectedFiles(prev => ({
            ...prev,
            [fileKey]: {
                file,
                preview: previewUrl,
            },
        }));
    };

    const handleRemoveFile = (fileKey) => {
        if (selectedFiles[fileKey]?.preview) {
            URL.revokeObjectURL(selectedFiles[fileKey].preview);
        }

        setSelectedFiles(prev => ({
            ...prev,
            [fileKey]: null,
        }));
    };

    return (
        <FormGroup>
            <FormLabel>ID Document</FormLabel>

            <div
                className={`proof-box ${dragActive ? "drag-active" : ""}`}
                onDrop={(e) => handleDrop(e, 'file1')}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                style={{
                    border: '2px dashed #cccccc44',
                    padding: '20px',
                    textAlign: 'center',
                    borderRadius: '8px',
                    cursor: 'pointer',
                }}
            >
                <label htmlFor="fileInput" style={{ cursor: 'pointer' }}>
                    <p className='m-0'>{dragActive ? "Drop file here..." : "Click or drag and drop a file here"}</p>

                    <input
                        type="file"
                        id="fileInput"
                        aria-label="Upload ID Document"
                        onChange={(e) => handleFileInputChange(e, 'file1')}
                        style={{ display: 'none' }}
                    />
                </label>

                {selectedFiles.file1 && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
                        <p>{selectedFiles.file1.file.name}</p>

                        {selectedFiles.file1.file.type === "application/pdf" ? (
                            <p>📄 PDF uploaded</p>
                        ) : (
                            <img
                                src={selectedFiles.file1.preview}
                                alt="Preview"
                                style={{ maxWidth: '100%', maxHeight: '140px' }}
                            />
                        )}

                        <button
                            type="button"
                            onClick={() => handleRemoveFile('file1')}
                            style={{
                                marginTop: '10px',
                                padding: '5px 10px',
                                background: 'red',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                            }}
                        >
                            Remove
                        </button>
                    </div>
                )}
            </div>

            <p className="t-red m-0">
                <small>(Maximum file upload size: 10MB. Allowed: JPG, PNG, PDF)</small>
            </p>
        </FormGroup>
    );
};

export default FileUpload;