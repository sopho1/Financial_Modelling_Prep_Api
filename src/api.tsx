import axios from "axios"
import { CompanyBalanceSheet, CompanyCashFlow, CompanyCompData, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch, CompanyTenK } from "./company"

interface SearchResponse {
    data: CompanySearch[];
}

export const searchcompanies = async(query: string) => {
    try{
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=uJWJhsrcysn6THPaISTcl10U5pLXxYhf`
         );
         return data;
    } catch (error: any) {
        if(error && typeof error === 'object' && 'isAxiosError' in error) {
            console.log("Error Message: ", error.message);
            return error.message;
        }
            else if (error instanceof Error) {
                // Handle generic errors
                console.log("Generic Error Message: ", error.message);
                return error.message;    
        }else {
            console.log("Unexpected error: ", error);
            return "An unexpected error has occured.";
        }
    }
};

export const getCompanyProfile = async(query: string) => {
    try {
        const data = await axios.get<CompanyProfile[]>(
            `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=uJWJhsrcysn6THPaISTcl10U5pLXxYhf`
        );
        return data;
    }catch (error: any){
        console.log("Error Message From API", error.message);
    }
};

export const getKeyMetrics = async(query: string) => {
    try {
        const data = await axios.get<CompanyKeyMetrics[]>(
            `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?apikey=uJWJhsrcysn6THPaISTcl10U5pLXxYhf`
        );
        return data;
    }catch (error: any){
        console.log("Error Message From API", error.message);
    }
};

export const getKeyIncomeStatement = async(query: string) => {
    try {
        const data = await axios.get<CompanyIncomeStatement[]>(
            `https://financialmodelingprep.com/api/v3/income-statement/${query}?apikey=uJWJhsrcysn6THPaISTcl10U5pLXxYhf`
        );
        return data;
    }catch (error: any){
        console.log("Error Message From API", error.message);
    }
};

export const getBalanceSheet = async(query: string) => {
    try {
        const data = await axios.get<CompanyBalanceSheet[]>(
            `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?apikey=uJWJhsrcysn6THPaISTcl10U5pLXxYhf`
        );
        return data;
    }catch (error: any){
        console.log("Error Message From API", error.message);
    }
};

export const getCashFlowStatement = async(query: string) => {
    try {
        const data = await axios.get<CompanyCashFlow[]>(
            `https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?apikey=uJWJhsrcysn6THPaISTcl10U5pLXxYhf`
        );
        return data;
    }catch (error: any){
        console.log("Error Message From API", error.message);
    }
};

export const getCompData = async(query: string) => {
    try {
        const data = await axios.get<CompanyCompData[]>(
            `https://financialmodelingprep.com/api/v4/stock_peers?symbol=${query}&apikey=uJWJhsrcysn6THPaISTcl10U5pLXxYhf`            // This API EndPpoint doesn't work because it needs the paid version of the site!
        );
        return data;
    }catch (error: any){
        console.log("Error Message From API", error.message);
    }
};

export const getTenK = async(query: string) => {
    try {
        const data = await axios.get<CompanyTenK[]>(
            `https://financialmodelingprep.com/api/v3/sec_filings/${query}?type=10-k&page=0&apikey=uJWJhsrcysn6THPaISTcl10U5pLXxYhf`           
        );
        return data;
    }catch (error: any){
        console.log("Error Message From API", error.message);
    }
};