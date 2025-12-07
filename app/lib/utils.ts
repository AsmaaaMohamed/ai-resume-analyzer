/*
* formats a file size in bytes to a human readable format
 * @param bytes
 * @returns string
 */

export function formatSize(bytes:number):string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    //determine the appropiate unit by calculating the log
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    //format with 2 decimal places
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}