package com.demo_1;

import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by tangxuebing on 2018/3/26.
 */

public class RnLog extends ReactContextBaseJavaModule {
    public static final String NAME = RnLog.class.getSimpleName();

    public RnLog(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return NAME;
    }

    @ReactMethod
    public void i(String msg) {
        Log.i(NAME, msg);
    }
}
