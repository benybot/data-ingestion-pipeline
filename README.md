# Data Ingestion Pipeline

## Overview
This project demonstrates a data ingestion pipeline that processes raw CSV data, normalizes fields, and prepares structured records for storage.

## Problem
Raw data sources (e.g., CSV uploads from platforms) often contain:
- Inconsistent field naming
- Special characters (e.g., currency symbols)
- Missing or misaligned values

These issues lead to broken pipelines and inaccurate data storage.

## Solution
A structured ingestion pipeline that:

- Parses incoming data
- Normalizes field names
- Handles edge cases (missing values, special characters)
- Prepares clean, structured output for database storage

## Pipeline Steps

1. File Upload (CSV input)
2. Header Parsing
3. Field Normalization
   - Removes special characters
   - Standardizes naming
4. Data Mapping
5. Output to structured format (JSON / database-ready)

## Example Transformation

Input:
"Total Released Amount (₱)"

Output:
"totalreleasedamount"

## Key Concepts

- Data normalization
- Schema mapping
- Error handling in ingestion pipelines
- Preparing data for automation workflows

## Sample Logic

```js
function normalize(field) {
  return field.replace(/[^\w]/g, '').toLowerCase();
}
