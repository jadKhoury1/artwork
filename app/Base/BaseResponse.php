<?php


namespace App\Base;

use Illuminate\Http\JsonResponse;

class BaseResponse
{
    /**
     * Added the const variables that will be needed in the class
     */
    const OK     = 'OK';
    const FAILED = 'FAILED';


    /**
     * Build the JSON response
     *
     * @param array $data
     * @param string $status
     * @param int $statusCode
     * @param array $headers
     *
     * @return JsonResponse
     */
    private function createResponse(array $data, string $status, int $statusCode, array $headers = []): JsonResponse
    {
        $dataToReturn = [
            'status'   => $status,
            'response' => $data,
        ];

        return response()->json($dataToReturn, $statusCode, $headers);
    }

    /**
     * This method is used to return success response
     *
     * @param array $data
     * @param int $statusCode
     * @param array $headers
     *
     * @return JsonResponse
     */
    public function statusOk(array $data = [], int $statusCode = 200, array $headers = []): JsonResponse
    {
        return $this->createResponse($data, self::OK, $statusCode, $headers);
    }

    /**
     * This method is used to return Failed response
     *
     * @param array $data
     * @param int $statusCode
     * @param array $headers
     *
     * @return JsonResponse
     */
    public function statusFail(array $data = [], int $statusCode = 200, array $headers = []): JsonResponse
    {
        return $this->createResponse($data, self::FAILED, $statusCode, $headers);
    }

    /**
     * This method is used to return Forbidden response
     *
     * @param array $data
     * @param int $statusCode
     * @param array $headers
     *
     * @return JsonResponse
     */
    public function forbidden(array $data = [], int $statusCode = 403, array $headers = []): JsonResponse
    {
        return $this->createResponse($data, self::FAILED, $statusCode, $headers);
    }

    /**
     * This method is used to return unauthorized response
     *
     * @param array $data
     * @param int $statusCode
     * @param array $headers
     *
     * @return JsonResponse
     */
    public function unauthorized(array $data = [], int $statusCode = 401, array $headers = []): JsonResponse
    {
        return $this->createResponse($data, self::FAILED, $statusCode, $headers);
    }
}
