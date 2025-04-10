<?php

namespace App\Base;

use Illuminate\Support\Facades\Request;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Routing\Controller as LaravelBaseController;


class BaseController extends LaravelBaseController
{
    use AuthorizesRequests, ValidatesRequests;

    /**
     * Stores the Request Object
     *
     * @var Request
     */
    protected Request $request;

    /**
     * Stores the response object
     *
     * @var BaseResponse
     */
    protected BaseResponse $response;

    public function __construct(Request $request, BaseResponse $response)
    {
        $this->request = $request;
        $this->response = $response;
    }
}
